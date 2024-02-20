export const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

export function isExternal (path: string): boolean {
  return EXTERNAL_URL_RE.test(path)
}

