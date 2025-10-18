<template>
  <div v-if="pending" class="flex min-h-[50vh] items-center justify-center">
    <span class="text-sm text-gray-400">Загрузка...</span>
  </div>
  <div v-else-if="article">
    <ArticleContent :article="article" />
  </div>
  <div v-else class="flex min-h-[50vh] flex-col items-center justify-center space-y-4">
    <p class="text-lg text-white">Статья не найдена</p>
    <NuxtLink to="/poleznye-stati" class="text-sm font-semibold text-primary">Вернуться в блог</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { showError } from '#app'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const { data: article, pending, error } = useArticle(slug)

watchEffect(() => {
  if (error.value) {
    showError({ statusCode: 404, statusMessage: 'Статья не найдена' })
  }
})

watchEffect(() => {
  if (article.value) {
    useSeoMeta({
      title: article.value.title,
      description: article.value.excerpt,
      ogTitle: article.value.title,
      ogDescription: article.value.excerpt,
      ogImage: article.value.coverImage,
    })
  }
})
</script>
