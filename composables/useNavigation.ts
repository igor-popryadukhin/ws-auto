import type { NavigationItem } from '../types/entities'

export function useNavigation() {
  return useAsyncData<NavigationItem[]>(
    'navigation',
    () => $fetch('/api/navigation'),
    { server: true, default: () => [] }
  )
}
