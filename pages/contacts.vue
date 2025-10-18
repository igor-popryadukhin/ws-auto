<template>
  <div class="space-y-16">
    <section class="bg-dark-800/60 py-16">
      <div class="mx-auto max-w-6xl space-y-4 px-4 text-gray-300">
        <h1 class="text-4xl font-semibold text-white">Контакты Only-Vag</h1>
        <p>Работаем ежедневно с 9:00 до 21:00. Записывайтесь по телефону, в мессенджерах или через форму расчёта.</p>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-3xl border border-white/10 bg-dark-900/80 p-6">
            <p class="text-sm uppercase tracking-wide text-primary">Телефон</p>
            <a href="tel:+78125550101" class="mt-2 block text-lg font-semibold text-white">+7 (812) 555-01-01</a>
          </div>
          <div class="rounded-3xl border border-white/10 bg-dark-900/80 p-6">
            <p class="text-sm uppercase tracking-wide text-primary">Email</p>
            <a href="mailto:info@only-vag.ru" class="mt-2 block text-lg font-semibold text-white">info@only-vag.ru</a>
          </div>
          <div class="rounded-3xl border border-white/10 bg-dark-900/80 p-6">
            <p class="text-sm uppercase tracking-wide text-primary">Юр. информация</p>
            <p class="mt-2 text-sm">ООО «Онли-Ваг»<br />ИНН 7800000000<br />ОГРН 1234567890123</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-dark-900 py-16" id="quote-form">
      <div class="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-dark-800/80 p-6 shadow-card">
        <ServiceQuoteForm />
      </div>
    </section>

    <ContactSection :locations="locations" />
  </div>
</template>

<script setup lang="ts">
const { data: locationsData } = useLocations()
const locations = computed(() => locationsData.value ?? [])

useSeoMeta({
  title: 'Контакты Only-Vag',
  description: 'Адреса автосервисов Only-Vag, телефоны, график работы и форма записи на диагностику и ремонт.',
})
</script>
