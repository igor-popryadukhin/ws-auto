<template>
  <footer class="bg-dark-900 text-gray-300 border-t border-dark-700/70">
    <div class="max-w-7xl mx-auto grid gap-10 px-4 py-16 md:grid-cols-4">
      <div class="space-y-4">
        <NuxtLink to="/" class="text-xl font-semibold text-white">Only-Vag</NuxtLink>
        <p class="text-sm text-gray-400">
          Сертифицированные автосервисы для автомобилей концерна VAG: Volkswagen, Audi, Škoda, Porsche, Bentley и другие.
        </p>
        <p class="text-xs text-gray-500">ООО «Онли-Ваг», ИНН 7800000000</p>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-white">Услуги</h3>
        <ul class="mt-4 space-y-2 text-sm">
          <li>Диагностика и ТО</li>
          <li>Ремонт подвески и тормозной системы</li>
          <li>Обслуживание DSG и АКПП</li>
          <li>Ремонт двигателя и турбин</li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-white">Информация</h3>
        <ul class="mt-4 space-y-2 text-sm">
          <li><NuxtLink to="/garantii" class="hover:text-primary">Гарантии</NuxtLink></li>
          <li><NuxtLink to="/reviews" class="hover:text-primary">Отзывы</NuxtLink></li>
          <li><NuxtLink to="/pretenzia" class="hover:text-primary">Форма претензии</NuxtLink></li>
          <li><NuxtLink to="/work" class="hover:text-primary">Вакансии</NuxtLink></li>
          <li><NuxtLink to="/poleznye-stati" class="hover:text-primary">Полезные статьи</NuxtLink></li>
        </ul>
      </div>

      <div class="space-y-3 text-sm">
        <h3 class="text-sm font-semibold uppercase tracking-wide text-white">Контакты</h3>
        <p>+7 (812) 555-01-01</p>
        <p>info@only-vag.ru</p>
        <p>Санкт-Петербург, пр. Энгельса, 154</p>
        <div class="flex items-center gap-4 pt-2">
          <a :href="runtimeConfig.public.telegramLink" target="_blank" rel="noopener" class="hover:text-primary">Telegram</a>
          <a href="https://vk.com" target="_blank" rel="noopener" class="hover:text-primary">VK</a>
          <a :href="runtimeConfig.public.whatsappLink" target="_blank" rel="noopener" class="hover:text-primary">WhatsApp</a>
        </div>
      </div>
    </div>

    <div class="border-t border-dark-700/70 py-6 text-center text-xs text-gray-500">
      <div class="max-w-7xl mx-auto flex flex-col items-center gap-2 px-4 md:flex-row md:justify-between">
        <p>© {{ new Date().getFullYear() }} Only-Vag. Все права защищены.</p>
        <NuxtLink to="/privacy" class="hover:text-primary">Политика конфиденциальности</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>
