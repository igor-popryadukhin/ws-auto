import type { ServiceTag } from '../types/entities'

export function useServiceTags() {
  return useAsyncData<ServiceTag[]>(
    'service-tags',
    () => $fetch('/api/service-tags'),
    { server: true, default: () => [] }
  )
}
