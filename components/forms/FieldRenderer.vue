<template>
  <div class="space-y-2">
    <label v-if="field.type !== 'checkbox'" :for="fieldId" class="text-sm font-medium text-white">
      {{ field.label }}<span v-if="field.required" class="text-primary">*</span>
    </label>

    <template v-if="field.type === 'textarea'">
      <textarea
        :id="fieldId"
        v-model="modelValueProxy"
        rows="4"
        :placeholder="field.placeholder"
        class="w-full rounded-2xl border border-white/10 bg-dark-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
        @blur="$emit('blur')"
      />
    </template>

    <template v-else-if="field.type === 'select'">
      <select
        :id="fieldId"
        v-model="modelValueProxy"
        :multiple="field.multiple"
        class="w-full rounded-2xl border border-white/10 bg-dark-800 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
        @blur="$emit('blur')"
      >
        <option value="" disabled>{{ field.placeholder ?? 'Выберите значение' }}</option>
        <option v-for="option in field.options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </template>

    <template v-else-if="field.type === 'radio'">
      <div class="flex flex-col gap-2" role="radiogroup" :aria-labelledby="fieldId">
        <span :id="fieldId" class="text-sm font-medium text-white">
          {{ field.label }}<span v-if="field.required" class="text-primary">*</span>
        </span>
        <label
          v-for="option in field.options"
          :key="option.value"
          class="flex items-center gap-3 rounded-2xl border border-white/10 bg-dark-800 px-4 py-3 text-sm text-white hover:border-primary"
        >
          <input
            :name="field.name"
            type="radio"
            class="h-4 w-4 border-white/20 bg-dark-900 text-primary focus:ring-primary"
            :value="option.value"
            v-model="modelValueProxy"
            @change="$emit('blur')"
          />
          <span>{{ option.label }}</span>
        </label>
      </div>
    </template>

    <template v-else-if="field.type === 'checkbox-group'">
      <div class="flex flex-col gap-2" role="group" :aria-labelledby="fieldId">
        <span :id="fieldId" class="text-sm font-medium text-white">
          {{ field.label }}<span v-if="field.required" class="text-primary">*</span>
        </span>
        <label
          v-for="option in field.options"
          :key="option.value"
          class="flex items-center gap-3 rounded-2xl border border-white/10 bg-dark-800 px-4 py-3 text-sm text-white hover:border-primary"
        >
          <input
            type="checkbox"
            class="h-4 w-4 border-white/20 bg-dark-900 text-primary focus:ring-primary"
            :value="option.value"
            :checked="modelValueProxy?.includes(option.value)"
            @change="toggleCheckbox(option.value)"
          />
          <span>{{ option.label }}</span>
        </label>
      </div>
    </template>

    <template v-else-if="field.type === 'checkbox'">
      <label class="flex items-center gap-3 text-sm text-white">
        <input
          type="checkbox"
          class="h-4 w-4 rounded border-white/20 bg-dark-900 text-primary focus:ring-primary"
          :checked="modelValueProxy"
          @change="modelValueProxy = !modelValueProxy"
          @blur="$emit('blur')"
        />
        <span>{{ field.label }}<span v-if="field.required" class="text-primary">*</span></span>
      </label>
    </template>

    <template v-else>
      <input
        :id="fieldId"
        v-model="modelValueProxy"
        :type="field.type"
        :placeholder="field.placeholder"
        class="w-full rounded-2xl border border-white/10 bg-dark-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary focus:outline-none"
        :inputmode="field.type === 'tel' ? 'tel' : undefined"
        @input="field.type === 'tel' ? formatPhone($event) : null"
        @blur="$emit('blur')"
      />
    </template>

    <p v-if="field.helperText" class="text-xs text-gray-400">{{ field.helperText }}</p>
    <p v-if="error" class="text-xs text-red-400">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { useId } from 'vue'
import type { FormField } from '~/types/forms'

const props = defineProps<{
  field: FormField
  modelValue: any
  error?: string
}>()

const emit = defineEmits(['update:modelValue', 'blur'])

const fieldId = computed(() => `${props.field.name}-${useId()}`)

const modelValueProxy = computed({
  get: () => props.modelValue,
  set: (value: any) => emit('update:modelValue', value),
})

function toggleCheckbox(value: string) {
  const current: string[] = Array.isArray(modelValueProxy.value) ? [...modelValueProxy.value] : []
  const index = current.indexOf(value)
  if (index === -1) current.push(value)
  else current.splice(index, 1)
  modelValueProxy.value = current
  emit('blur')
}

function formatPhone(event: Event) {
  const input = event.target as HTMLInputElement
  let digits = input.value.replace(/\D/g, '')
  if (!digits.startsWith('7')) {
    digits = digits.replace(/^8/, '7')
    if (!digits.startsWith('7')) {
      digits = `7${digits}`
    }
  }
  digits = digits.slice(0, 11)
  const parts = ['+7']
  if (digits.length > 1) {
    parts.push(` (${digits.slice(1, 4)}`)
  }
  if (digits.length >= 4) {
    parts[parts.length - 1] += ')'
  }
  if (digits.length >= 7) {
    parts.push(` ${digits.slice(4, 7)}`)
  }
  if (digits.length >= 9) {
    parts.push(`-${digits.slice(7, 9)}`)
  }
  if (digits.length >= 11) {
    parts.push(`-${digits.slice(9, 11)}`)
  }
  const formatted = parts.join('')
  input.value = formatted
  modelValueProxy.value = formatted
}
</script>
