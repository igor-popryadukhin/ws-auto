<template>
  <section class="bg-dark-900 py-12">
    <div class="mx-auto max-w-7xl px-4">
      <div class="flex flex-wrap gap-3">
        <span
          v-for="tag in tags"
          :key="tag.id"
          class="rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary"
        >
          {{ tag.label }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ServiceTag } from '~/types/entities'

defineProps<{ tags: ServiceTag[] }>()
</script>
