<template>
  <BaseForm
    id="vacancy-form"
    endpoint="/api/forms/vacancy"
    title="Отправить резюме"
    description="Расскажите о себе — мы перезвоним и пригласим на собеседование."
    :fields="fields"
    submit-label="Отправить резюме"
  />
</template>

<script setup lang="ts">
import type { FormField } from '~/types/forms'

const { data: vacancies } = useVacancies()
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
    type: 'select',
    name: 'vacancyId',
    label: 'Желаемая вакансия',
    placeholder: 'Выберите вакансию',
    required: true,
    options:
      vacancies.value?.length
        ? vacancies.value.map((vacancy) => ({ label: vacancy.title, value: vacancy.id }))
        : [
            { label: 'Автослесарь-механик', value: 'mechanic' },
            { label: 'Автоэлектрик-диагност', value: 'diagnostic' },
          ],
  },
  {
    type: 'textarea',
    name: 'experience',
    label: 'Опыт работы',
    placeholder: 'Опишите профессиональный опыт',
    required: true,
    fullWidth: true,
  },
  {
    type: 'checkbox-group',
    name: 'skills',
    label: 'Навыки',
    required: true,
    fullWidth: true,
    options: [
      { label: 'Диагностика VAS', value: 'vas' },
      { label: 'Ремонт двигателей', value: 'engine' },
      { label: 'Трансмиссия DSG', value: 'dsg' },
      { label: 'Электрооборудование', value: 'electrics' },
      { label: 'Кузовные работы', value: 'body' },
    ],
  },
  {
    type: 'radio',
    name: 'branch',
    label: 'Предпочитаемый филиал',
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
    name: 'comments',
    label: 'Комментарий',
    placeholder: 'Добавьте сопроводительное письмо',
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
