<template>
  <div class="space-y-16">
    <section class="bg-dark-800/60 py-16">
      <div class="mx-auto max-w-6xl space-y-4 px-4 text-gray-300">
        <h1 class="text-4xl font-semibold text-white">Марки автомобилей</h1>
        <p>Выберите марку, чтобы узнать подробности об обслуживании, типовых работах и спецпредложениях Only-Vag.</p>
      </div>
    </section>

    <BrandGrid :brands="brands" />
  </div>
</template>

<script setup lang="ts">
const { data: brandsData } = useBrands()
const brands = computed(() => brandsData.value ?? [])

useSeoMeta({
  title: 'Марки автомобилей VAG — Only-Vag',
  description: 'Обслуживаем автомобили Volkswagen, Audi, Škoda, Porsche, Bentley и другие бренды концерна VAG.',
})
</script>
