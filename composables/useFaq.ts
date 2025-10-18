import type { FaqItem } from '../types/entities'

export function useFaq() {
  return useAsyncData<FaqItem[]>(
    'faq',
    () => $fetch('/api/faq'),
    { server: true, default: () => [] }
  )
}
