import { createError } from 'h3'
import { z } from 'zod'
import type { QuoteFormPayload } from '../../../types/entities'

const payloadSchema = z.object({
  serviceType: z.string().min(2),
  brand: z.string().min(2),
  model: z.string().min(1),
  vehicleCondition: z.string().min(2),
  branch: z.string().min(2),
  preferredDate: z.string().optional(),
  issues: z.string().min(3),
  mileage: z.string().optional(),
  contactName: z.string().min(2),
  contactPhone: z.string().regex(/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/),
  contactEmail: z.string().email().optional(),
  comment: z.string().optional(),
  policyAccepted: z.literal(true),
  recaptchaToken: z.string().optional(),
})

type QuotePayload = z.infer<typeof payloadSchema>

export default defineEventHandler(async (event) => {
  const body = await readBody<QuoteFormPayload>(event)
  const parsed = payloadSchema.safeParse(body)

  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Validation failed',
      data: parsed.error.flatten().fieldErrors,
    })
  }

  const payload: QuotePayload = parsed.data

  await sendEmailMock(payload)

  return {
    status: 'ok',
    message: 'Заявка отправлена. Наш менеджер свяжется с вами в течение 15 минут.',
  }
})

async function sendEmailMock(payload: QuotePayload) {
  console.info('[quote-form] Новая заявка', payload)
}
