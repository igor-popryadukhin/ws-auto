<template>
  <section class="bg-dark-900 py-16">
    <div class="mx-auto max-w-6xl space-y-8 px-4">
      <header class="space-y-2">
        <h1 class="text-3xl font-semibold text-white">Полезные статьи</h1>
        <p class="text-sm text-gray-400">Рекомендации по обслуживанию автомобилей VAG, реальные кейсы и экспертные советы.</p>
      </header>
      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="article in articles"
          :key="article.id"
          class="overflow-hidden rounded-3xl border border-white/10 bg-dark-800/70 shadow-card transition hover:-translate-y-1 hover:border-primary/70"
        >
          <img :src="article.coverImage" :alt="article.title" loading="lazy" class="h-48 w-full object-cover" />
          <div class="space-y-3 p-6">
            <div class="flex items-center gap-3 text-xs uppercase tracking-wide text-gray-400">
              <span>{{ formatDate(article.publishedAt) }}</span>
              <span v-for="tag in article.tags" :key="tag" class="rounded-full bg-primary/10 px-2 py-1 text-primary">{{ tag }}</span>
            </div>
            <h2 class="text-xl font-semibold text-white">{{ article.title }}</h2>
            <p class="text-sm text-gray-300">{{ article.excerpt }}</p>
            <NuxtLink :to="`/poleznye-stati/${article.slug}`" class="inline-flex items-center text-sm font-semibold text-primary">ЧИТАЙТЕ ДАЛЕЕ →</NuxtLink>
          </div>
        </article>
      </div>
      <slot name="pagination"></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Article } from '~/types/entities'

defineProps<{ articles: Article[] }>()

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('ru-RU')
}
</script>
