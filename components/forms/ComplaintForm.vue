<template>
  <BaseForm
    id="complaint-form"
    endpoint="/api/forms/complaint"
    title="Подать претензию"
    description="Расскажите о ситуации — мы разберёмся и свяжемся с вами."
    :fields="fields"
    submit-label="Отправить"
  />
</template>

<script setup lang="ts">
import type { FormField } from '~/types/forms'

const { data: locations } = useLocations()

const fields = computed<FormField[]>(() => [
  {
    type: 'text',
    name: 'name',
    label: 'Имя',
    placeholder: 'Введите имя',
    required: true,
  },
  {
    type: 'tel',
    name: 'phone',
    label: 'Телефон',
    placeholder: '+7 (___) ___-__-__',
    required: true,
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'name@example.com',
    required: true,
  },
  {
    type: 'radio',
    name: 'branch',
    label: 'Филиал',
    required: true,
    options:
      locations.value?.length
        ? locations.value.map((location) => ({ label: location.title, value: location.title }))
        : [
            { label: 'Only-Vag Север', value: 'Only-Vag Север' },
            { label: 'Only-Vag Юг', value: 'Only-Vag Юг' },
          ],
  },
  {
    type: 'textarea',
    name: 'description',
    label: 'Опишите проблему',
    placeholder: 'Расскажите, что произошло',
    required: true,
    fullWidth: true,
  },
  {
    type: 'checkbox',
    name: 'policyAccepted',
    label: 'Согласен(а) с политикой обработки персональных данных',
    required: true,
    fullWidth: true,
  },
])
</script>
