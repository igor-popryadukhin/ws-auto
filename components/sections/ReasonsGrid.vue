<template>
  <section class="bg-dark-800/60 py-16">
    <div class="mx-auto max-w-7xl px-4">
      <div class="grid gap-6 lg:grid-cols-4">
        <div
          v-for="reason in reasons"
          :key="reason.title"
          class="rounded-3xl border border-white/5 bg-dark-900/80 p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/60"
        >
          <div class="text-3xl">{{ reason.emoji }}</div>
          <h3 class="mt-4 text-lg font-semibold text-white">{{ reason.title }}</h3>
          <p class="mt-2 text-sm text-gray-400">{{ reason.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ReasonItem {
  title: string
  description: string
  emoji: string
}

defineProps<{ reasons: ReasonItem[] }>()
</script>
