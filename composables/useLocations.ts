import type { Location } from '../types/entities'

export function useLocations() {
  return useAsyncData<Location[]>(
    'locations',
    () => $fetch('/api/locations'),
    { server: true, default: () => [] }
  )
}
