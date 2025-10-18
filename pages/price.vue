<template>
  <div class="space-y-16">
    <section class="bg-dark-800/60 py-16">
      <div class="mx-auto max-w-7xl space-y-4 px-4">
        <h1 class="text-4xl font-semibold text-white">Прайс-лист Only-Vag</h1>
        <p class="text-sm text-gray-400">Стоимость указана без учёта расходных материалов. Окончательная цена фиксируется после диагностики и согласования работ.</p>
      </div>
    </section>

    <PricingTable :categories="categories" />

    <section class="bg-dark-900 py-16" id="quote-form">
      <div class="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.3fr,1fr]">
        <div class="space-y-4 text-gray-300">
          <h2 class="text-3xl font-semibold text-white">Не нашли нужную услугу?</h2>
          <p>Отправьте запрос — подготовим индивидуальный расчёт, расскажем о наличии запчастей и сроках выполнения.</p>
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
const { data: pricingData } = usePricing()
const { data: locationsData } = useLocations()

const categories = computed(() => pricingData.value ?? [])
const locations = computed(() => locationsData.value ?? [])

useSeoMeta({
  title: 'Прайс-лист Only-Vag',
  description: 'Цены на диагностику, ТО, ремонт двигателей, коробок DSG и подвески. Стоимость включает работу, детали уточняются отдельно.',
})
</script>
