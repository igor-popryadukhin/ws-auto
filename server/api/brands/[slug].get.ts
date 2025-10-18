import { brands } from '../../data/mockData'
import { createError } from 'h3'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const brand = brands.find((item) => item.slug === slug)

  if (!brand) {
    throw createError({ statusCode: 404, statusMessage: 'Brand not found' })
  }

  return brand
})
