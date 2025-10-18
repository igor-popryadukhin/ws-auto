<template>
  <div class="space-y-16">
    <ReviewWidgets :widgets="reviews" />

    <section class="bg-dark-800/60 py-16">
      <div class="mx-auto max-w-4xl space-y-4 px-4 text-gray-300">
        <h2 class="text-3xl font-semibold text-white">Прозрачность и доверие</h2>
        <p>Отзывы публикуются автоматически с Яндекс.Карт. Мы не удаляем негативные комментарии и всегда даём обратную связь.</p>
        <p>Планируем добавить собственную систему отзывов и интеграцию с другими платформами.</p>
      </div>
    </section>

    <section class="bg-dark-900 py-16" id="quote-form">
      <div class="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.3fr,1fr]">
        <div class="space-y-4 text-gray-300">
          <h2 class="text-3xl font-semibold text-white">Готовы записаться?</h2>
          <p>Расскажите о задаче — подберём мастера и согласуем удобное время визита.</p>
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
const { data: reviewsData } = useReviews()
const { data: locationsData } = useLocations()

const reviews = computed(() => reviewsData.value ?? [])
const locations = computed(() => locationsData.value ?? [])

useSeoMeta({
  title: 'Отзывы клиентов Only-Vag',
  description: 'Реальные оценки из Яндекс.Карт: рейтинг, количество отзывов и последние комментарии по каждому филиалу.',
})
</script>
