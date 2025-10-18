<template>
  <section class="bg-dark-900 py-16">
    <div class="mx-auto max-w-6xl space-y-8 px-4">
      <header class="space-y-2">
        <h2 class="text-3xl font-semibold text-white">Отзывы клиентов</h2>
        <p class="text-sm text-gray-400">
          Мы используем официальные виджеты Яндекс.Карт — отзывы не редактируются и доступны по ссылке.
        </p>
      </header>
      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="widget in widgets"
          :key="widget.id"
          class="space-y-4 rounded-3xl border border-white/10 bg-dark-800/70 p-6 shadow-card"
        >
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg font-semibold text-white">{{ widget.branch }}</h3>
              <p class="text-sm text-gray-400">Рейтинг {{ widget.rating.toFixed(1) }} ({{ widget.reviewsCount }} отзывов)</p>
            </div>
            <NuxtLink :to="widget.platformUrl" target="_blank" rel="noopener" class="text-xs font-semibold uppercase tracking-wide text-primary">
              Открыть на карте →
            </NuxtLink>
          </div>
          <iframe
            :src="widget.iframeSrc"
            class="h-64 w-full rounded-2xl border border-white/10"
            loading="lazy"
            allow="fullscreen"
          ></iframe>
          <p v-if="widget.highlight" class="text-xs text-gray-400">{{ widget.highlight }}</p>
        </article>
      </div>
      <p class="text-xs text-gray-500">
        Почему нам доверяют: все отзывы собираются автоматически, мы открыто показываем рейтинг и отвечаем на комментарии.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ReviewWidget } from '~/types/entities'

defineProps<{ widgets: ReviewWidget[] }>()
</script>
