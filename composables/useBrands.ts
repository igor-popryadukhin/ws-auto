import type { Brand } from '../types/entities'

export function useBrands() {
  return useAsyncData<Brand[]>(
    'brands',
    () => $fetch('/api/brands'),
    { server: true, default: () => [] }
  )
}

export async function fetchBrand(slug: string) {
  return await $fetch<Brand>(`/api/brands/${slug}`)
}
