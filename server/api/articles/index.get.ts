import { articles } from '../../data/mockData'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const page = Number(query.page ?? 1)
  const perPage = Number(query.perPage ?? 6)

  const start = (page - 1) * perPage
  const end = start + perPage

  return {
    items: articles.slice(start, end),
    total: articles.length,
    page,
    perPage,
  }
})
