<template>
  <div class="space-y-12">
    <ArticlesGrid :articles="articles">
      <template #pagination>
        <div v-if="pages > 1" class="flex items-center justify-center gap-3">
          <button
            type="button"
            class="rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:border-white/10 disabled:text-gray-500"
            :disabled="page === 1"
            @click="navigate(page - 1)"
          >
            Назад
          </button>
          <span class="text-xs uppercase tracking-wide text-gray-400">Страница {{ page }} из {{ pages }}</span>
          <button
            type="button"
            class="rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:border-white/10 disabled:text-gray-500"
            :disabled="page === pages"
            @click="navigate(page + 1)"
          >
            Далее
          </button>
        </div>
      </template>
    </ArticlesGrid>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const page = ref(Number(route.query.page ?? 1))
const perPage = 6

const { data } = useArticles(page, perPage)

const articles = computed(() => data.value?.items ?? [])
const total = computed(() => data.value?.total ?? 0)
const pages = computed(() => Math.max(1, Math.ceil(total.value / perPage)))

watch(
  () => route.query.page,
  (value) => {
    const newPage = Number(value ?? 1)
    if (Number.isNaN(newPage) || newPage < 1) {
      page.value = 1
    } else {
      page.value = newPage
    }
  }
)

function navigate(target: number) {
  router.push({ query: { ...route.query, page: target } })
}

useSeoMeta({
  title: 'Блог Only-Vag',
  description: 'Полезные материалы по обслуживанию автомобилей VAG, советы специалистов и реальные кейсы наших автосервисов.',
})
</script>
