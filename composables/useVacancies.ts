import type { Vacancy } from '../types/entities'

export function useVacancies() {
  return useAsyncData<Vacancy[]>(
    'vacancies',
    () => $fetch('/api/vacancies'),
    { server: true, default: () => [] }
  )
}
