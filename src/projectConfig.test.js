import test from 'node:test'
import assert from 'node:assert/strict'
import { projectUrl, projectImage, isVercelUrl } from './projectConfig.js'
test('links devem ser HTTPS sem credenciais', () => {
  for (const url of ['', 'javascript:alert(1)', 'http://example.com', 'https://user:password@example.com', 'not a url']) assert.equal(projectUrl(url), null)
  assert.equal(projectUrl('https://meu-site.vercel.app'), 'https://meu-site.vercel.app/')
})
test('captura automática só aceita domínio Vercel válido', () => {
  assert.equal(isVercelUrl('https://meu-site.vercel.app'), true)
  for (const url of ['https://vercel.app.evil.com', 'https://example.com', 'https://meu-site.vercel.app:8080', 'http://localhost']) assert.equal(isVercelUrl(url), false)
})
test('imagem pode ser local ou HTTPS, nunca URL relativa de protocolo', () => {
  assert.equal(projectImage({image:'/images/projects/demo.png'}), '/images/projects/demo.png')
  assert.equal(projectImage({image:'//example.com/photo.png'}), null)
  assert.equal(projectImage({image:'javascript:alert(1)'}), null)
})
