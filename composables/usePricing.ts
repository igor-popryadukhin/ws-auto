import type { PriceCategory } from '../types/entities'

export function usePricing() {
  return useAsyncData<PriceCategory[]>(
    'pricing',
    () => $fetch('/api/pricing'),
    { server: true, default: () => [] }
  )
}
