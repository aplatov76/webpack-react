export function addQueryParams(params: Record<string, string>) {
  const searchParams = new URLSearchParams(window.location.search)
  Object.entries(params).forEach(([name, value]) => {
    if (value) searchParams.set(name, value)
  })
  console.log('params: ', params)
  return `?${searchParams.toString()}`
}
/**
 * Функция добавления params в url
 * @param params
 */
export function getQueryParams(params: Record<string, string>) {
  window.history.pushState(null, '', `${addQueryParams(params)}`)
}
