export function parseRepoUrl(url: string) {
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)/)

  if (!match) return undefined

  return { owner: match[1], repo: match[2].replace(/\.git$/, '') }
}
