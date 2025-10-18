<template>
  <header class="bg-dark-900 text-white sticky top-0 z-50 border-b border-dark-700/60">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 py-4">
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <span
          class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold uppercase tracking-widest transition group-hover:bg-primary/90"
          aria-hidden="true"
        >
          OV
        </span>
        <div>
          <p class="text-lg font-semibold leading-tight">Only-Vag</p>
          <p class="text-xs text-gray-300">Сеть автосервисов VAG</p>
        </div>
      </NuxtLink>

      <div class="hidden items-center gap-10 lg:flex">
        <nav aria-label="Главная навигация" class="flex items-center gap-6 text-sm font-medium">
          <NuxtLink
            v-for="item in navigation"
            :key="item.href"
            :to="item.href"
            class="transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            {{ item.label }}
          </NuxtLink>

          <div class="relative" @mouseenter="showBrands = true" @mouseleave="showBrands = false">
            <button
              type="button"
              class="flex items-center gap-2 transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              aria-haspopup="true"
              :aria-expanded="showBrands"
            >
              Марки
              <ChevronDownIcon class="h-4 w-4" aria-hidden="true" />
            </button>
            <Transition name="fade">
              <div
                v-if="showBrands"
                class="absolute left-0 top-full mt-3 w-80 rounded-2xl border border-dark-700/50 bg-dark-800 p-4 shadow-card"
              >
                <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Популярные марки</p>
                <ul class="grid grid-cols-1 gap-2">
                  <li v-for="brand in brands" :key="brand.slug">
                    <NuxtLink
                      :to="brandLink(brand.slug)"
                      class="flex items-center justify-between rounded-lg bg-dark-700/40 px-3 py-2 text-sm transition hover:bg-dark-700 hover:text-primary"
                    >
                      <span>{{ brand.name }}</span>
                      <span class="text-xs text-gray-400">→</span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>
        </nav>

        <div class="flex items-center gap-6 text-sm">
          <div class="text-right">
            <a href="tel:+78125550101" class="font-semibold text-white transition hover:text-primary">+7 (812) 555-01-01</a>
            <p class="text-xs text-gray-400">ежедневно 9:00–21:00</p>
          </div>
          <div class="flex items-center gap-3 text-gray-300">
            <a :href="runtimeConfig.public.telegramLink" target="_blank" rel="noopener" class="transition hover:text-primary" aria-label="Telegram">
              <PaperAirplaneIcon class="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="https://vk.com" target="_blank" rel="noopener" class="transition hover:text-primary" aria-label="VK">
              <LinkIcon class="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-dark-800 text-white shadow-lg lg:hidden"
        @click="mobileOpen = !mobileOpen"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-nav"
      >
        <span class="sr-only">Открыть меню</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
    </div>

    <Transition name="slide-fade">
      <div
        v-if="mobileOpen"
        id="mobile-nav"
        class="border-t border-dark-700/60 bg-dark-900/95 backdrop-blur lg:hidden"
      >
        <div class="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6">
          <nav class="grid gap-4 text-base font-medium text-white">
            <NuxtLink
              v-for="item in navigation"
              :key="item.href"
              :to="item.href"
              class="hover:text-primary"
              @click="mobileOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
          <div>
            <p class="mb-3 text-xs uppercase tracking-wide text-gray-400">Марки</p>
            <div class="grid grid-cols-2 gap-3">
              <NuxtLink
                v-for="brand in brands"
                :key="brand.slug"
                :to="brandLink(brand.slug)"
                class="rounded-xl bg-dark-800 px-3 py-3 text-sm text-white transition hover:bg-dark-700"
                @click="mobileOpen = false"
              >
                {{ brand.name }}
              </NuxtLink>
            </div>
          </div>
          <div class="flex flex-col gap-3 text-sm">
            <a href="tel:+78125550101" class="font-semibold text-white">+7 (812) 555-01-01</a>
            <p class="text-xs text-gray-400">ежедневно 9:00–21:00</p>
            <div class="flex items-center gap-4">
              <a :href="runtimeConfig.public.telegramLink" target="_blank" rel="noopener" class="hover:text-primary" aria-label="Telegram">
                <PaperAirplaneIcon class="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://vk.com" target="_blank" rel="noopener" class="hover:text-primary" aria-label="VK">
                <LinkIcon class="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { Bars3Icon, ChevronDownIcon, LinkIcon, PaperAirplaneIcon } from '@heroicons/vue/20/solid'
import { useNavigation } from '../composables/useNavigation'
import { useBrands } from '../composables/useBrands'

const { data: navigation } = useNavigation()
const { data: brands } = useBrands()
const runtimeConfig = useRuntimeConfig()
const route = useRoute()

const mobileOpen = ref(false)
const showBrands = ref(false)

const brandLink = (slug: string) => `/${slug}`

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
    showBrands.value = false
  }
)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
