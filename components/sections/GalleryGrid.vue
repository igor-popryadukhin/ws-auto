<template>
  <section class="bg-dark-900 py-16">
    <div class="mx-auto max-w-7xl px-4">
      <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 class="text-3xl font-semibold text-white">Фотогалерея сервисов</h2>
          <p class="text-sm text-gray-400">Чистые боксы, современное оборудование и комфортные зоны ожидания.</p>
        </div>
        <p class="text-xs uppercase tracking-wide text-gray-500">Нажмите на фото для увеличения</p>
      </div>
      <div class="mt-10 grid gap-4 md:grid-cols-3">
        <button
          v-for="image in images"
          :key="image.id"
          type="button"
          class="group relative overflow-hidden rounded-3xl border border-white/10 bg-dark-800/60"
          @click="openImage(image.url)"
        >
          <img :src="image.url" :alt="image.alt" loading="lazy" class="h-64 w-full object-cover transition group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100"></div>
          <span class="absolute bottom-4 left-4 text-sm font-semibold text-white">{{ image.alt }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { GalleryImage } from '~/types/entities'

defineProps<{ images: GalleryImage[] }>()

function openImage(url: string) {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank')
  }
}
</script>
