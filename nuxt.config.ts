// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/tailwindcss', { cssPath: 'assets/css/tailwind.css', exposeConfig: true }],
  ],
  css: ['assets/css/tailwind.css'],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Only-Vag — Сеть автосервисов VAG',
      titleTemplate: '%s | Only-Vag',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Сеть сертифицированных автосервисов Only-Vag: обслуживание и ремонт автомобилей Volkswagen, Audi, Škoda, Seat, Porsche, Bentley и других брендов VAG.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#111111' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:site_name', content: 'Only-Vag' },
        { property: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700;800&display=swap',
        },
      ],
    },
  },
  imports: {
    dirs: ['composables'],
  },
  routeRules: {
    '/poleznye-stati/**': { swr: 3600 },
    '/akcii': { swr: 1800 },
    '/price': { swr: 1800 },
  },
  nitro: {
    routeRules: {
      '/api/**': { cors: true },
    },
  },
  runtimeConfig: {
    public: {
      recaptchaSiteKey: '',
      whatsappLink: 'https://wa.me/79001234567',
      telegramLink: 'https://t.me/onlyvag',
    },
  },
})
