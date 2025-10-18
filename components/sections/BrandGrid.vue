<template>
  <section id="brands" class="bg-dark-900 py-16">
    <div class="mx-auto max-w-7xl px-4">
      <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div class="space-y-2">
          <h2 class="text-3xl font-semibold text-white">Марки, с которыми работаем</h2>
          <p class="text-sm text-gray-400">Обслуживаем весь модельный ряд концерна VAG и поддерживаем гарантию.</p>
        </div>
        <NuxtLink to="/brands" class="text-sm font-semibold text-primary hover:text-primary/80">Все марки →</NuxtLink>
      </div>
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="brand in brands"
          :key="brand.slug"
          class="group relative overflow-hidden rounded-3xl border border-white/5 bg-dark-800/60 p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/70 hover:shadow-xl"
        >
          <div class="flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-dark-700 to-dark-900">
            <img
              :src="brand.heroImage"
              :alt="brand.name"
              loading="lazy"
              class="h-24 w-auto object-contain opacity-90 transition group-hover:opacity-100"
            />
          </div>
          <h3 class="mt-4 text-xl font-semibold text-white">{{ brand.name }}</h3>
          <p class="mt-2 text-sm text-gray-400">{{ brand.description }}</p>
          <NuxtLink
            :to="`/${brand.slug}`"
            class="mt-4 inline-flex items-center text-sm font-semibold text-primary transition group-hover:text-primary/80"
          >
            Подробнее
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Brand } from '~/types/entities'

defineProps<{ brands: Brand[] }>()
</script>
