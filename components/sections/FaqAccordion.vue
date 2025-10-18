<template>
  <section class="bg-dark-800/60 py-16">
    <div class="mx-auto max-w-5xl px-4">
      <h2 class="text-3xl font-semibold text-white">Вопросы и ответы</h2>
      <div class="mt-8 space-y-4">
        <Disclosure v-for="item in items" :key="item.id" v-slot="{ open }">
          <DisclosureButton
            class="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-dark-900/80 px-5 py-4 text-left text-sm font-medium text-white transition hover:border-primary/60 focus:outline-none"
          >
            <span>{{ item.question }}</span>
            <ChevronDownIcon
              class="h-5 w-5 text-gray-400 transition"
              :class="{ 'rotate-180 text-primary': open }"
            />
          </DisclosureButton>
          <DisclosurePanel class="rounded-2xl border border-white/10 bg-dark-900/60 px-5 py-4 text-sm text-gray-300">
            {{ item.answer }}
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import type { FaqItem } from '~/types/entities'

defineProps<{ items: FaqItem[] }>()
</script>
