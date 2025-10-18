<template>
  <section class="bg-dark-900 py-16">
    <div class="mx-auto max-w-7xl space-y-12 px-4 lg:flex lg:gap-10">
      <aside class="lg:w-1/4">
        <nav class="sticky top-28 space-y-3 text-sm">
          <a
            v-for="category in categories"
            :key="category.id"
            :href="`#${category.id}`"
            class="block rounded-full border border-white/10 px-4 py-2 text-white transition hover:border-primary hover:text-primary"
          >
            {{ category.name }}
          </a>
        </nav>
      </aside>
      <div class="flex-1 space-y-12">
        <article v-for="category in categories" :key="category.id" :id="category.id" class="space-y-6">
          <header>
            <h2 class="text-2xl font-semibold text-white">{{ category.name }}</h2>
            <p v-if="category.description" class="text-sm text-gray-400">{{ category.description }}</p>
          </header>
          <div class="overflow-hidden rounded-3xl border border-white/10 bg-dark-800/80 shadow-card">
            <table class="min-w-full divide-y divide-white/5 text-left text-sm text-gray-300">
              <thead class="bg-white/5 text-xs uppercase tracking-wide text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">Работа</th>
                  <th scope="col" class="px-6 py-3">Стоимость</th>
                  <th scope="col" class="px-6 py-3">Примечание</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/5">
                <tr v-for="item in category.items" :key="item.id" class="hover:bg-white/5">
                  <td class="px-6 py-4 text-white">{{ item.title }}</td>
                  <td class="px-6 py-4 text-primary">
                    <span v-if="item.priceFrom">от {{ item.priceFrom?.toLocaleString('ru-RU') }} {{ item.unit ?? '₽' }}</span>
                    <span v-else-if="item.priceTo">до {{ item.priceTo?.toLocaleString('ru-RU') }} {{ item.unit ?? '₽' }}</span>
                    <span v-else>по запросу</span>
                  </td>
                  <td class="px-6 py-4 text-gray-400">{{ item.note ?? '—' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PriceCategory } from '~/types/entities'

defineProps<{ categories: PriceCategory[] }>()
</script>
