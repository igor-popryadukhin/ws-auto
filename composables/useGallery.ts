import type { GalleryImage } from '../types/entities'

export function useGallery() {
  return useAsyncData<GalleryImage[]>(
    'gallery',
    () => $fetch('/api/gallery'),
    { server: true, default: () => [] }
  )
}
