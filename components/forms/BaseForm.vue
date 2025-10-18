<template>
  <form :id="id" class="space-y-6" @submit.prevent="handleSubmit">
    <header v-if="title || description" class="space-y-2">
      <h2 v-if="title" class="text-2xl font-semibold text-white">{{ title }}</h2>
      <p v-if="description" class="text-sm text-gray-400">{{ description }}</p>
    </header>

    <div v-if="steps" class="space-y-6">
      <div class="flex items-center gap-3">
        <div class="flex-1 overflow-hidden rounded-full bg-dark-700/70">
          <div
            class="h-2 rounded-full bg-primary transition-all"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
        <span class="text-xs text-gray-400">Шаг {{ activeStep + 1 }} из {{ steps.length }}</span>
      </div>
      <div class="grid gap-4 md:grid-cols-2">
        <template v-for="field in currentFields" :key="field.name">
          <div :class="field.fullWidth ? 'md:col-span-2' : ''">
            <FieldRenderer
              :field="field"
              v-model="formState[field.name]"
              :error="errors[field.name]"
              @blur="validateField(field)"
            />
          </div>
        </template>
      </div>
      <div class="flex items-center justify-between gap-4">
        <button
          type="button"
          class="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:border-white/10 disabled:text-gray-500"
          @click="activeStep--"
          :disabled="activeStep === 0 || isSubmitting"
        >
          Назад
        </button>
        <button
          v-if="activeStep < steps.length - 1"
          type="button"
          class="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-primary/60"
          @click="nextStep"
          :disabled="isSubmitting"
        >
          Далее
        </button>
        <button
          v-else
          type="submit"
          class="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-primary/60"
          :disabled="isSubmitting"
        >
          {{ submitLabel }}
        </button>
      </div>
    </div>

    <div v-else class="grid gap-4 md:grid-cols-2">
      <template v-for="field in fields" :key="field.name">
        <div :class="field.fullWidth ? 'md:col-span-2' : ''">
          <FieldRenderer
            :field="field"
            v-model="formState[field.name]"
            :error="errors[field.name]"
            @blur="validateField(field)"
          />
        </div>
      </template>
      <div class="md:col-span-2">
        <button
          type="submit"
          class="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-primary/60"
          :disabled="isSubmitting"
        >
          {{ submitLabel }}
        </button>
      </div>
    </div>

    <p v-if="message" :class="success ? 'text-green-400' : 'text-red-400'" class="text-sm">{{ message }}</p>
  </form>
</template>

<script setup lang="ts">
import { toRaw } from 'vue'
import type { FormField, FormStep } from '~/types/forms'
import FieldRenderer from '~/components/forms/FieldRenderer.vue'

const props = withDefaults(
  defineProps<{
    id: string
    endpoint: string
    title?: string
    description?: string
    submitLabel?: string
    fields?: FormField[]
    steps?: FormStep[]
    initialValues?: Record<string, unknown>
  }>(),
  {
    submitLabel: 'Отправить',
    initialValues: () => ({}),
  }
)

const emit = defineEmits<{
  success: []
}>

const formState = reactive<Record<string, any>>({})
const errors = reactive<Record<string, string>>({})
const isSubmitting = ref(false)
const message = ref('')
const success = ref(false)
const activeStep = ref(0)

const steps = computed(() => props.steps)
const fields = computed(() => props.fields ?? [])

const currentFields = computed<FormField[]>(() => {
  if (!steps.value) return fields.value
  return steps.value[activeStep.value]?.fields ?? []
})

const progress = computed(() => {
  if (!steps.value?.length) return 0
  return Math.round(((activeStep.value + 1) / steps.value.length) * 100)
})

watchEffect(() => {
  const allFields = steps.value ? steps.value.flatMap((step) => step.fields) : fields.value
  for (const field of allFields) {
    if (!(field.name in formState)) {
      formState[field.name] = getInitialValue(field)
    }
  }
})

function validateField(field: FormField) {
  const value = formState[field.name]
  let error = ''

  if (field.required) {
    if (field.type === 'checkbox' && !value) {
      error = 'Поле обязательно для заполнения'
    } else if (field.type === 'checkbox-group' && (!Array.isArray(value) || value.length === 0)) {
      error = 'Выберите хотя бы одно значение'
    } else if (!value) {
      error = 'Поле обязательно для заполнения'
    }
  }

  if (!error && value) {
    if (field.type === 'email') {
      const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/
      if (!emailRegex.test(value)) error = 'Введите корректный email'
    }
    if (field.type === 'tel') {
      const phoneRegex = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/
      if (!phoneRegex.test(value)) error = 'Введите телефон в формате +7 (XXX) XXX-XX-XX'
    }
  }

  if (error) {
    errors[field.name] = error
  } else {
    delete errors[field.name]
  }

  return !error
}

function validateStep() {
  return currentFields.value.every((field) => validateField(field))
}

async function handleSubmit() {
  message.value = ''
  success.value = false

  const allFields = steps.value ? steps.value.flatMap((step) => step.fields) : fields.value
  for (const field of allFields) {
    validateField(field)
  }

  if (Object.keys(errors).length > 0) {
    message.value = 'Проверьте корректность заполнения формы.'
    return
  }

  try {
    isSubmitting.value = true
    const payload = structuredClone(toRaw(formState))
    await $fetch(props.endpoint, {
      method: 'POST',
      body: payload,
    })
    message.value = 'Форма успешно отправлена!'
    success.value = true
    emit('success')
    Object.keys(formState).forEach((key) => {
      formState[key] = fieldDefaultValue(key)
    })
    Object.keys(errors).forEach((key) => delete errors[key])
    activeStep.value = 0
  } catch (error: any) {
    success.value = false
    message.value = error?.data?.message ?? 'Не удалось отправить форму. Попробуйте ещё раз.'
  } finally {
    isSubmitting.value = false
  }
}

function fieldDefaultValue(key: string) {
  const allFields = steps.value ? steps.value.flatMap((step) => step.fields) : fields.value
  const field = allFields.find((item) => item.name === key)
  if (!field) return props.initialValues[key] ?? ''
  if (props.initialValues[field.name] !== undefined) {
    return props.initialValues[field.name]
  }
  if (field.type === 'checkbox') return false
  if (field.type === 'checkbox-group') return []
  return ''
}

function getInitialValue(field: FormField) {
  if (props.initialValues[field.name] !== undefined) {
    return props.initialValues[field.name]
  }
  if (field.type === 'checkbox') return false
  if (field.type === 'checkbox-group') return []
  return ''
}

function nextStep() {
  if (!validateStep()) return
  if (steps.value && activeStep.value < steps.value.length - 1) {
    activeStep.value += 1
  }
}
</script>
