<template>
  <div>
    <HeroBanner />

    <ReasonsGrid :reasons="reasons" />

    <section class="bg-dark-900 py-16">
      <div class="mx-auto max-w-7xl space-y-8 px-4">
        <header class="space-y-3">
          <h2 class="text-3xl font-semibold text-white">Почему Only-Vag</h2>
          <p class="text-sm text-gray-400">
            Узкая специализация и постоянное обучение мастеров позволяют нам точно определять неисправности и экономить ваш бюджет.
          </p>
        </header>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-3xl border border-white/10 bg-dark-800/60 p-6">
            <h3 class="text-xl font-semibold text-white">Оригинальное оборудование</h3>
            <p class="mt-3 text-sm text-gray-400">Диагностические стенды VAS, собственный склад расходников и масел для всей линейки VAG.</p>
          </div>
          <div class="rounded-3xl border border-white/10 bg-dark-800/60 p-6">
            <h3 class="text-xl font-semibold text-white">Прозрачные сметы</h3>
            <p class="mt-3 text-sm text-gray-400">Показываем детали осмотра, согласуем только необходимые работы, фиксируем стоимость в заказ-наряде.</p>
          </div>
          <div class="rounded-3xl border border-white/10 bg-dark-800/60 p-6">
            <h3 class="text-xl font-semibold text-white">Гарантии до 24 месяцев</h3>
            <p class="mt-3 text-sm text-gray-400">На ремонтные работы и обслуживание. Предоставляем фотоотчёт и рекомендации по дальнейшему ТО.</p>
          </div>
        </div>
      </div>
    </section>

    <ServiceTags :tags="serviceTags" />

    <BrandGrid :brands="brands" />

    <section class="bg-dark-800/60 py-16" id="quote-form">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.4fr,1fr]">
        <div class="space-y-6">
          <h2 class="text-3xl font-semibold text-white">Рассчитаем стоимость работ за несколько минут</h2>
          <p class="text-sm text-gray-400">
            Менеджер уточнит детали, предложит доступные даты и отправит предварительную смету. Заявки обрабатываются ежедневно с 9:00 до 21:00.
          </p>
          <ul class="space-y-3 text-sm text-gray-300">
            <li>• Подтверждаем запись по телефону или в мессенджере</li>
            <li>• Подбираем оригинальные и аналоговые запчасти на выбор</li>
            <li>• Фиксируем стоимость до визита</li>
          </ul>
        </div>
        <div class="rounded-3xl border border-white/10 bg-dark-900/80 p-6 shadow-card">
          <ServiceQuoteForm />
        </div>
      </div>
    </section>

    <FaqAccordion :items="faq" />

    <GalleryGrid :images="gallery" />

    <section class="bg-dark-800/60 py-16">
      <div class="mx-auto max-w-6xl space-y-6 px-4 text-gray-300">
        <h2 class="text-3xl font-semibold text-white">Комплексное обслуживание автомобилей VAG</h2>
        <p>
          Мы организовали отдельные технические посты для обслуживания коробок DSG, двигателей TSI/TFSI, дизельных моторов и гибридных установок. В штате мотористы, автоэлектрики, диагносты VAS и мастера приёмщики.
        </p>
        <p>
          Каждый автомобиль проходит входную диагностику, после завершения работ — контроль качества и тест-драйв. Клиент получает фотоотчёт и рекомендации по дальнейшему обслуживанию.
        </p>
      </div>
    </section>

    <ReviewWidgets :widgets="reviews" />

    <ContactSection :locations="locations" />
  </div>
</template>

<script setup lang="ts">
const { data: brandsData } = useBrands()
const { data: faqData } = useFaq()
const { data: galleryData } = useGallery()
const { data: reviewsData } = useReviews()
const { data: locationsData } = useLocations()
const { data: serviceTagsData } = useServiceTags()

const brands = computed(() => brandsData.value ?? [])
const faq = computed(() => faqData.value ?? [])
const gallery = computed(() => galleryData.value ?? [])
const reviews = computed(() => reviewsData.value ?? [])
const locations = computed(() => locationsData.value ?? [])
const serviceTags = computed(() => serviceTagsData.value ?? [])

const reasons = [
  {
    emoji: '🛠️',
    title: 'Мастера VAG',
    description: 'Обучение на дилерских программах, доступ к технической документации и базам данных.',
  },
  {
    emoji: '🧾',
    title: 'Прозрачные сметы',
    description: 'Показываем стоимость работы и запчастей до начала ремонта, фиксируем её в заказ-наряде.',
  },
  {
    emoji: '⚡',
    title: 'Скорость',
    description: 'Большинство ремонтных работ выполняем в течение одного дня. Есть подменные автомобили.',
  },
  {
    emoji: '🛡️',
    title: 'Гарантии',
    description: 'До 24 месяцев или 40 000 км пробега. Запасные части сертифицированы.',
  },
]

useSeoMeta({
  title: 'Only-Vag — сервис автомобилей Volkswagen, Audi, Škoda, Porsche',
  description: 'Сеть Only-Vag: обслуживание и ремонт автомобилей VAG с гарантией до 24 месяцев. Бесплатная диагностика, честные цены, заявки онлайн.',
  ogTitle: 'Only-Vag — автосервис VAG в Санкт-Петербурге',
  ogDescription: 'Комплексное обслуживание, оригинальное оборудование VAS, заявки онлайн.',
  ogImage: 'https://only-vag.ru/og-image.jpg',
})
</script>
