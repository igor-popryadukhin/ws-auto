<template>
  <div class="space-y-16">
    <section class="bg-dark-800/60 py-16">
      <div class="mx-auto max-w-4xl space-y-4 px-4 text-gray-300">
        <h1 class="text-4xl font-semibold text-white">Форма претензии</h1>
        <p>Мы ценим обратную связь. Заполните форму — руководитель сервиса свяжется с вами и предложит решение.</p>
      </div>
    </section>

    <section class="bg-dark-900 py-16">
      <div class="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-dark-800/80 p-6 shadow-card">
        <ComplaintForm />
      </div>
    </section>

    <ContactSection :locations="locations" />
  </div>
</template>

<script setup lang="ts">
const { data: locationsData } = useLocations()
const locations = computed(() => locationsData.value ?? [])

useSeoMeta({
  title: 'Подать претензию — Only-Vag',
  description: 'Форма обратной связи для решения спорных вопросов. Мы связываемся в течение одного рабочего дня.',
})
</script>
