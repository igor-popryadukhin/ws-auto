<template>
  <div class="space-y-16">
    <section class="bg-dark-800/60 py-16">
      <div class="mx-auto max-w-6xl space-y-6 px-4 text-gray-300">
        <h1 class="text-4xl font-semibold text-white">Вакансии Only-Vag</h1>
        <p>Мы растём и расширяем команду. Предлагаем стабильную работу, официальное оформление, обучение у ведущих мастеров VAG.</p>
      </div>
    </section>

    <section class="bg-dark-900 py-16">
      <div class="mx-auto max-w-6xl space-y-6 px-4">
        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="vacancy in vacancies"
            :key="vacancy.id"
            class="space-y-4 rounded-3xl border border-white/10 bg-dark-800/80 p-6 text-gray-300 shadow-card"
          >
            <h2 class="text-2xl font-semibold text-white">{{ vacancy.title }}</h2>
            <p>{{ vacancy.description }}</p>
            <div>
              <h3 class="text-sm font-semibold uppercase tracking-wide text-primary">Обязанности</h3>
              <ul class="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li v-for="item in vacancy.responsibilities" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold uppercase tracking-wide text-primary">Требования</h3>
              <ul class="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li v-for="item in vacancy.requirements" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold uppercase tracking-wide text-primary">Условия</h3>
              <ul class="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li v-for="item in vacancy.conditions" :key="item">{{ item }}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-dark-900 py-16">
      <div class="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-dark-800/80 p-6 shadow-card">
        <VacancyForm />
      </div>
    </section>

    <ContactSection :locations="locations" />
  </div>
</template>

<script setup lang="ts">
const { data: vacanciesData } = useVacancies()
const { data: locationsData } = useLocations()

const vacancies = computed(() => vacanciesData.value ?? [])
const locations = computed(() => locationsData.value ?? [])

useSeoMeta({
  title: 'Вакансии Only-Vag',
  description: 'Работа в сети автосервисов VAG: автослесари, диагносты, мастера приёмщики. Официальное оформление и обучение.',
})
</script>
