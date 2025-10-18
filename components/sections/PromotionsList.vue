<template>
  <section class="bg-dark-800/60 py-16">
    <div class="mx-auto max-w-7xl space-y-8 px-4">
      <header class="space-y-2">
        <h1 class="text-3xl font-semibold text-white">Актуальные акции</h1>
        <p class="text-sm text-gray-400">
          Все предложения можно комбинировать с персональными скидками. Следите за обновлениями — мы регулярно запускаем новые спецпроекты.
        </p>
      </header>
      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="promotion in promotions"
          :key="promotion.id"
          class="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-dark-900/80 shadow-card"
        >
          <img :src="promotion.image" :alt="promotion.title" loading="lazy" class="h-48 w-full object-cover" />
          <div class="flex flex-1 flex-col gap-4 p-6">
            <div class="space-y-2">
              <h2 class="text-2xl font-semibold text-white">{{ promotion.title }}</h2>
              <p class="text-sm text-gray-300">{{ promotion.description }}</p>
            </div>
            <p class="text-xs text-gray-400">{{ promotion.terms }}</p>
            <p v-if="promotion.validUntil" class="text-xs font-semibold uppercase tracking-wide text-primary">
              Действует до {{ formatDate(promotion.validUntil) }}
            </p>
            <NuxtLink to="#quote-form" class="mt-auto inline-flex w-max rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary/90">
              Участвовать
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Promotion } from '~/types/entities'

defineProps<{ promotions: Promotion[] }>()

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('ru-RU')
}
</script>
