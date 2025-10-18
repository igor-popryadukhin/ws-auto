<template>
  <div v-if="pending" class="flex min-h-[60vh] items-center justify-center">
    <span class="text-sm text-gray-400">Загрузка...</span>
  </div>
  <div v-else-if="brand" class="space-y-16">
    <section class="bg-dark-900 py-16">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
        <div class="space-y-6">
          <p class="text-xs uppercase tracking-wide text-primary">Бренд Only-Vag</p>
          <h1 class="text-4xl font-semibold text-white">Сервис {{ brand.name }}</h1>
          <p class="text-lg text-gray-300">{{ brand.description }}</p>
          <ul class="space-y-2 text-sm text-gray-300">
            <li v-for="item in brand.advantages" :key="item">• {{ item }}</li>
          </ul>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="#quote-form" class="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90">
              Записаться на сервис
            </NuxtLink>
            <NuxtLink to="/price" class="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-primary hover:text-primary">
              Посмотреть цены
            </NuxtLink>
          </div>
        </div>
        <div class="rounded-3xl border border-white/10 bg-dark-800/70 p-6 shadow-card">
          <img :src="brand.heroImage" :alt="brand.name" class="h-72 w-full rounded-2xl object-cover" />
        </div>
      </div>
    </section>

    <section class="bg-dark-800/60 py-16">
      <div class="mx-auto max-w-7xl space-y-8 px-4">
        <h2 class="text-3xl font-semibold text-white">Популярные услуги</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="service in brand.services"
            :key="service"
            class="rounded-3xl border border-white/10 bg-dark-900/80 p-6 text-sm text-gray-300 shadow-card"
          >
            {{ service }}
          </div>
        </div>
      </div>
    </section>

    <section class="bg-dark-900 py-16" id="quote-form">
      <div class="mx-auto max-w-4xl space-y-6 px-4">
        <h2 class="text-3xl font-semibold text-white">Записаться на обслуживание {{ brand.name }}</h2>
        <p class="text-sm text-gray-400">Укажите модель и задачу — предложим варианты и подготовим смету.</p>
        <div class="rounded-3xl border border-white/10 bg-dark-800/80 p-6 shadow-card">
          <ServiceQuoteForm />
        </div>
      </div>
    </section>

    <ContactSection :locations="locations" />
  </div>
  <div v-else class="flex min-h-[60vh] flex-col items-center justify-center space-y-4">
    <p class="text-lg text-white">Марка не найдена</p>
    <NuxtLink to="/" class="text-sm font-semibold text-primary">Вернуться на главную</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { showError } from '#app'
import { fetchBrand } from '~/composables/useBrands'

const route = useRoute()
const { data: locationsData } = useLocations()
const locations = computed(() => locationsData.value ?? [])

const slug = computed(() => route.params.brand as string)
const { data: brand, pending, error } = useAsyncData(
  () => `brand-${slug.value}`,
  () => fetchBrand(slug.value),
  {
    watch: [slug],
    server: true,
  }
)

watchEffect(() => {
  if (error.value) {
    showError({ statusCode: 404, statusMessage: 'Марка не найдена' })
  }
})

watchEffect(() => {
  if (brand.value) {
    useSeoMeta({
      title: `Сервис ${brand.value.name}`,
      description: brand.value.description,
      ogTitle: `Only-Vag — сервис ${brand.value.name}`,
      ogDescription: brand.value.description,
      ogImage: brand.value.heroImage,
    })
  }
})
</script>
