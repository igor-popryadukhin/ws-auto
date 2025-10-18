import type { MaybeRef } from 'vue'
import type { Article } from '../types/entities'

export function useArticles(page: MaybeRef<number> = 1, perPage: MaybeRef<number> = 6) {
  return useAsyncData(
    () => ['articles', unref(page), unref(perPage)],
    () =>
      $fetch<{ items: Article[]; total: number; page: number; perPage: number }>('/api/articles', {
        query: { page: unref(page), perPage: unref(perPage) },
      }),
    {
      server: true,
      watch: [() => unref(page), () => unref(perPage)],
    }
  )
}

export function useArticle(slug: MaybeRef<string>) {
  return useAsyncData<Article>(
    () => ['article', unref(slug)],
    () => $fetch(`/api/articles/${unref(slug)}`),
    { server: true, watch: [() => unref(slug)] }
  )
}
