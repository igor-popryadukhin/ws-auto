<template>
  <section class="bg-dark-800/60 py-16">
    <div class="mx-auto max-w-7xl px-4">
      <div class="grid gap-8 lg:grid-cols-[2fr,3fr]">
        <div class="space-y-6">
          <h2 class="text-3xl font-semibold text-white">Контакты и филиалы</h2>
          <p class="text-sm text-gray-400">
            Выберите ближайший автосервис Only-Vag и постройте маршрут в Яндекс Навигаторе. Для региональных клиентов готовим персональные предложения.
          </p>
          <ul class="space-y-4">
            <li
              v-for="location in locations"
              :key="location.id"
              class="rounded-3xl border border-white/10 bg-dark-900/80 p-5 shadow-card"
            >
              <h3 class="text-lg font-semibold text-white">{{ location.title }}</h3>
              <p class="text-sm text-gray-400">{{ location.address }}</p>
              <p class="text-sm text-gray-400">{{ location.schedule }}</p>
              <div class="mt-3 flex flex-wrap items-center gap-3 text-sm">
                <a :href="`tel:${location.phone.replace(/[^\d+]/g, '')}`" class="font-semibold text-white hover:text-primary">
                  {{ location.phone }}
                </a>
                <a :href="location.mapUrl" target="_blank" rel="noopener" class="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-primary hover:text-primary">
                  Маршрут
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-dark-900/80">
          <iframe
            title="Карта сервисов Only-Vag"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aexample1&source=constructor"
            class="h-full w-full"
            loading="lazy"
          ></iframe>
          <div class="absolute bottom-4 right-4 rounded-full bg-dark-900/90 px-4 py-2 text-xs text-gray-400">
            Для международной версии предусмотрена интеграция с Google Maps
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Location } from '~/types/entities'

defineProps<{ locations: Location[] }>()
</script>
