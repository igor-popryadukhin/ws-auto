import type { Promotion } from '../types/entities'

export function usePromotions() {
  return useAsyncData<Promotion[]>(
    'promotions',
    () => $fetch('/api/promotions'),
    { server: true, default: () => [] }
  )
}
