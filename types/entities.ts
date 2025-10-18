export interface NavigationItem {
  label: string
  href: string
  external?: boolean
}

export interface Brand {
  slug: string
  name: string
  heroImage: string
  description: string
  advantages: string[]
  services: string[]
  heroCta?: {
    label: string
    href: string
  }
}

export interface Promotion {
  id: string
  title: string
  description: string
  image: string
  terms: string
  validUntil?: string
}

export interface PriceCategory {
  id: string
  name: string
  description?: string
  items: PriceItem[]
}

export interface PriceItem {
  id: string
  title: string
  priceFrom?: number
  priceTo?: number
  unit?: string
  note?: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface Location {
  id: string
  title: string
  address: string
  phone: string
  schedule: string
  mapUrl: string
  coordinates: [number, number]
}

export interface ReviewWidget {
  id: string
  branch: string
  rating: number
  reviewsCount: number
  iframeSrc: string
  platformUrl: string
  highlight?: string
}

export interface Vacancy {
  id: string
  title: string
  description: string
  responsibilities: string[]
  requirements: string[]
  conditions: string[]
}

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  publishedAt: string
  tags: string[]
}

export interface ServiceTag {
  id: string
  label: string
}

export interface GalleryImage {
  id: string
  alt: string
  url: string
  width: number
  height: number
}

export interface QuoteFormPayload {
  serviceType: string
  brand: string
  model: string
  vehicleCondition: string
  branch: string
  preferredDate?: string
  issues: string
  mileage?: string
  contactName: string
  contactPhone: string
  contactEmail?: string
  comment?: string
  policyAccepted: boolean
  recaptchaToken?: string
}

export interface ComplaintFormPayload {
  branch: string
  name: string
  phone: string
  email: string
  description: string
  policyAccepted: boolean
  recaptchaToken?: string
}

export interface VacancyApplicationPayload {
  vacancyId: string
  name: string
  phone: string
  experience: string
  skills: string[]
  branch: string
  comments?: string
  policyAccepted: boolean
  recaptchaToken?: string
}

export interface SeoMeta {
  title: string
  description: string
  keywords?: string[]
  image?: string
}
