export const concatUrl = (url, newQuery, searchParams) => {
  const base = import.meta.env.VITE_BASE_URL
  const key = import.meta.env.VITE_API_KEY
  const startUrl = new URL(url, base)
  const query = {
    include_adult: false,
    include_video: false,
    language: "en-US",
    api_key: encodeURIComponent(key),
    sort_by: "popularity.desc",
    query: searchParams?.get("query") ?? "",
    page: parseInt(searchParams?.get("page") ?? 1),
  }
  startUrl.search = new URLSearchParams({ ...query, ...newQuery }).toString()
  return startUrl
}
