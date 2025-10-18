import type { ReviewWidget } from '../types/entities'

export function useReviews() {
  return useAsyncData<ReviewWidget[]>(
    'reviews',
    () => $fetch('/api/reviews'),
    { server: true, default: () => [] }
  )
}
