import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { isVercelUrl } from '../src/projectConfig.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const configPath = path.join(root, 'src/projects.json')
const projects = JSON.parse(await readFile(configPath, 'utf8'))
const ids = new Set()
for (const project of projects) {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(project.id) || ids.has(project.id)) throw new Error(`ID inválido ou duplicado: ${project.id}`)
  ids.add(project.id)
  if (project.url && !isVercelUrl(project.url)) throw new Error(`A captura automática aceita apenas links públicos HTTPS *.vercel.app: ${project.id}. Para domínio próprio, cadastre a captura no campo image.`)
}
const configured = projects.filter(p => p.url)
if (!configured.length) {
  console.log('Nenhum link configurado. Adicione seus projetos em src/projects.json; os estudos demonstrativos permanecem disponíveis.')
  process.exit(0)
}
if (process.argv.includes('--check')) {
  console.log(`Configuração válida: ${configured.length} projeto(s) público(s) na Vercel.`)
  process.exit(0)
}
const { chromium } = await import('playwright')
const browser = await chromium.launch({ headless: true })
const captureDir = path.join(root, 'public/images/projects')
await mkdir(captureDir, { recursive: true })
let failures = 0
try {
  for (const project of configured) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1008 }, deviceScaleFactor: 1, colorScheme: 'light', reducedMotion: 'reduce', serviceWorkers: 'block', acceptDownloads: false })
    try {
      const page = await context.newPage()
      const response = await page.goto(project.url, { waitUntil: 'load', timeout: 45000 })
      if (!response?.ok()) throw new Error(`Resposta HTTP ${response?.status() ?? 'indisponível'}`)
      if (!isVercelUrl(page.url())) throw new Error('O site redirecionou para fora da Vercel; use uma captura manual para este projeto.')
      await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {})
      await page.evaluate(async () => {
        await Promise.race([
          Promise.all([document.fonts.ready, ...[...document.images].map(img => img.decode().catch(() => {}))]),
          new Promise(resolve => setTimeout(resolve, 8000)),
        ])
      })
      await page.screenshot({ path: path.join(captureDir, `${project.id}.png`), fullPage: false, animations: 'disabled', timeout: 15000 })
      project.image = `/images/projects/${project.id}.png`
      console.log(`Captura salva: ${project.title}`)
    } catch (error) {
      failures++
      console.error(`Falha em ${project.id}: ${error.message}. A imagem anterior foi preservada.`)
    } finally { await context.close() }
  }
  await writeFile(configPath, JSON.stringify(projects, null, 2) + '\n', 'utf8')
} finally { await browser.close() }
if (failures) process.exitCode = 1
