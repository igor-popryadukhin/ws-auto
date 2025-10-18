<template>
  <BaseForm
    id="quote-form"
    endpoint="/api/forms/quote"
    :steps="formSteps"
    title="Рассчитать стоимость"
    description="Ответьте на 7 вопросов — мы подготовим смету и перезвоним в течение 15 минут."
    submit-label="Отправить заявку"
    @success="onSuccess"
  />
</template>

<script setup lang="ts">
import type { FormStep } from '~/types/forms'

const runtimeConfig = useRuntimeConfig()
const { data: brands } = useBrands()
const { data: locations } = useLocations()

const branchesOptions = computed(() =>
  (locations.value ?? []).map((location) => ({ label: location.title, value: location.title }))
)

const brandOptions = computed(() =>
  (brands.value ?? []).map((brand) => ({ label: brand.name, value: brand.name }))
)

const formSteps = computed<FormStep[]>(() => [
  {
    title: 'Тип обслуживания',
    fields: [
      {
        type: 'select',
        name: 'serviceType',
        label: 'Какая услуга вас интересует?',
        placeholder: 'Выберите услугу',
        required: true,
        options: [
          { label: 'Плановое ТО', value: 'maintenance' },
          { label: 'Диагностика', value: 'diagnostics' },
          { label: 'Ремонт двигателя', value: 'engine' },
          { label: 'Ремонт трансмиссии', value: 'transmission' },
          { label: 'Подвеска и тормоза', value: 'suspension' },
          { label: 'Другая услуга', value: 'other' },
        ],
      },
      {
        type: 'textarea',
        name: 'issues',
        label: 'Опишите проблему или желаемые работы',
        placeholder: 'Например: шум в подвеске, требуется диагностика подвески и тормозов',
        required: true,
        fullWidth: true,
      },
    ],
  },
  {
    title: 'Марка и модель',
    fields: [
      {
        type: 'select',
        name: 'brand',
        label: 'Марка автомобиля',
        placeholder: 'Выберите марку',
        required: true,
        options: brandOptions.value.length
          ? brandOptions.value
          : [
              { label: 'Volkswagen', value: 'Volkswagen' },
              { label: 'Audi', value: 'Audi' },
              { label: 'Škoda', value: 'Škода' },
            ],
      },
      {
        type: 'text',
        name: 'model',
        label: 'Модель автомобиля',
        placeholder: 'Например, Tiguan, Octavia, A6',
        required: true,
      },
    ],
  },
  {
    title: 'Состояние',
    fields: [
      {
        type: 'radio',
        name: 'vehicleCondition',
        label: 'Текущее состояние автомобиля',
        required: true,
        options: [
          { label: 'Авто на ходу', value: 'running' },
          { label: 'Нужна эвакуация', value: 'tow' },
          { label: 'Только диагностика', value: 'diagnostics' },
        ],
      },
      {
        type: 'text',
        name: 'mileage',
        label: 'Пробег (км)',
        placeholder: 'Например, 75 000',
        helperText: 'Укажем рекомендации по ТО в зависимости от пробега',
      },
    ],
  },
  {
    title: 'Выбор филиала',
    fields: [
      {
        type: 'select',
        name: 'branch',
        label: 'Предпочитаемый филиал',
        placeholder: 'Выберите филиал',
        required: true,
        options: branchesOptions.value.length
          ? branchesOptions.value
          : [
              { label: 'Only-Vag Север', value: 'Only-Vag Север' },
              { label: 'Only-Vag Юг', value: 'Only-Vag Юг' },
            ],
      },
      {
        type: 'date',
        name: 'preferredDate',
        label: 'Желаемая дата визита',
        placeholder: 'Выберите дату',
      },
    ],
  },
  {
    title: 'Контакты',
    fields: [
      {
        type: 'text',
        name: 'contactName',
        label: 'Ваше имя',
        placeholder: 'Введите имя',
        required: true,
      },
      {
        type: 'tel',
        name: 'contactPhone',
        label: 'Телефон',
        placeholder: '+7 (___) ___-__-__',
        required: true,
        helperText: 'Мы перезвоним в течение 15 минут',
      },
      {
        type: 'email',
        name: 'contactEmail',
        label: 'Email',
        placeholder: 'name@example.com',
        fullWidth: true,
      },
    ],
  },
  {
    title: 'Дополнительная информация',
    fields: [
      {
        type: 'textarea',
        name: 'comment',
        label: 'Комментарии',
        placeholder: 'Сообщите удобное время звонка или VIN-номер',
        fullWidth: true,
      },
    ],
  },
  {
    title: 'Подтверждение',
    fields: [
      {
        type: 'checkbox',
        name: 'policy',
        label: 'Согласен(а) с политикой обработки персональных данных',
        required: true,
        fullWidth: true,
      },
    ],
  },
])

function onSuccess() {
  if (runtimeConfig.public.whatsappLink && typeof window !== 'undefined') {
    window.open(runtimeConfig.public.whatsappLink, '_blank')
  }
}
</script>
