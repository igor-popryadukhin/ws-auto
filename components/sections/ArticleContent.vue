<template>
  <article class="prose prose-invert mx-auto max-w-3xl px-4 py-16">
    <header class="space-y-4 text-center">
      <p class="text-sm uppercase tracking-wide text-gray-400">{{ formattedDate }}</p>
      <h1 class="text-4xl font-semibold text-white">{{ article.title }}</h1>
    </header>
    <img :src="article.coverImage" :alt="article.title" class="my-8 w-full rounded-3xl border border-white/10" loading="lazy" />
    <div class="prose prose-invert max-w-none" v-html="article.content"></div>
    <footer class="mt-12 flex flex-wrap gap-3">
      <span v-for="tag in article.tags" :key="tag" class="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
        {{ tag }}
      </span>
    </footer>
    <div class="mt-10">
      <NuxtLink to="/poleznye-stati" class="text-sm font-semibold text-primary">← Назад к статьям</NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Article } from '~/types/entities'

const props = defineProps<{ article: Article }>()

const formattedDate = computed(() => new Date(props.article.publishedAt).toLocaleDateString('ru-RU'))
</script>
