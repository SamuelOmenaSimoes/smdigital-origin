export function projectUrl(value) {
  if (!value) return null
  try {
    const url = new URL(value)
    if (url.protocol !== 'https:' || url.username || url.password) return null
    return url.href
  } catch { return null }
}

export function isVercelUrl(value) {
  const valid = projectUrl(value)
  if (!valid) return false
  const url = new URL(valid)
  return url.hostname.endsWith('.vercel.app') && !url.port
}

export function projectImage(project) {
  if (project.image?.startsWith('/') && !project.image.startsWith('//')) return project.image
  return projectUrl(project.image)
}
