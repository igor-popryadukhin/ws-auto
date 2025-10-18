import { articles } from '../../data/mockData'
import { createError } from 'h3'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const article = articles.find((item) => item.slug === slug)

  if (!article) {
    throw createError({ statusCode: 404, statusMessage: 'Article not found' })
  }

  return article
})
