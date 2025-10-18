<template>
  <div class="space-y-16">
    <PromotionsList :promotions="promotions" />

    <section class="bg-dark-900 py-16" id="quote-form">
      <div class="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.3fr,1fr]">
        <div class="space-y-4 text-gray-300">
          <h2 class="text-3xl font-semibold text-white">Нужна персональная скидка?</h2>
          <p>Оставьте заявку — расскажем о специальных предложениях для корпоративных клиентов, клубных карт и постгарантийного обслуживания.</p>
        </div>
        <div class="rounded-3xl border border-white/10 bg-dark-800/80 p-6 shadow-card">
          <ServiceQuoteForm />
        </div>
      </div>
    </section>

    <ContactSection :locations="locations" />
  </div>
</template>

<script setup lang="ts">
const { data: promotionsData } = usePromotions()
const { data: locationsData } = useLocations()

const promotions = computed(() => promotionsData.value ?? [])
const locations = computed(() => locationsData.value ?? [])

useSeoMeta({
  title: 'Акции и спецпредложения Only-Vag',
  description: 'Скидки на диагностику, ремонт подвески, обслуживание DSG и программы лояльности для постоянных клиентов.',
})
</script>
