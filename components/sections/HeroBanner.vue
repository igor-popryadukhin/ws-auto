<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 py-20">
    <div class="absolute inset-0">
      <div class="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"></div>
      <div class="absolute right-10 top-10 h-40 w-40 rounded-full border border-primary/30"></div>
    </div>
    <div class="relative mx-auto flex max-w-7xl flex-col gap-16 px-4 lg:flex-row lg:items-center">
      <div class="max-w-2xl space-y-6">
        <span class="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs uppercase tracking-widest text-primary">
          Сертифицированный сервис VAG
        </span>
        <h1 class="text-4xl font-bold leading-tight text-white sm:text-5xl">
          Бесплатная диагностика и до 24 месяцев гарантии на ремонт автомобилей VAG
        </h1>
        <p class="text-lg text-gray-300">
          Only-Vag — сеть специализированных автосервисов. Используем оригинальное оборудование VAS, предоставляем прозрачные сметы и фотоотчёты, подбираем оптимальные решения под ваш автомобиль.
        </p>
        <div class="flex flex-col gap-3 sm:flex-row">
          <NuxtLink
            to="#quote-form"
            class="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Записаться на ремонт
          </NuxtLink>
          <NuxtLink
            to="/akcii"
            class="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-primary hover:text-primary"
          >
            Актуальные акции
          </NuxtLink>
        </div>
        <dl class="grid grid-cols-2 gap-6 pt-6 sm:grid-cols-4">
          <div>
            <dt class="text-xs uppercase tracking-wide text-gray-400">Опыт</dt>
            <dd class="text-2xl font-semibold text-white">10+ лет</dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-wide text-gray-400">Филиалы</dt>
            <dd class="text-2xl font-semibold text-white">2 сервиса</dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-wide text-gray-400">Отзывы</dt>
            <dd class="text-2xl font-semibold text-white">4.9 / 5</dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-wide text-gray-400">Гарантия</dt>
            <dd class="text-2xl font-semibold text-white">до 24 мес.</dd>
          </div>
        </dl>
      </div>
      <div class="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-dark-800/80 p-6 shadow-card">
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold text-white">Спецпредложение</h2>
          <p class="text-sm text-gray-300">Бесплатная диагностика подвески при записи онлайн + 5% скидка на ремонт.</p>
          <ul class="space-y-3 text-sm text-gray-300">
            <li>— Проверка подвески на подъёмнике</li>
            <li>— Диагностика тормозной системы</li>
            <li>— Фото и видеоотчёт по итогам</li>
          </ul>
          <NuxtLink
            to="#quote-form"
            class="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-dark-900 transition hover:bg-gray-200"
          >
            Получить предложение
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
