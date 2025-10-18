import { createError } from 'h3'
import { z } from 'zod'
import type { ComplaintFormPayload } from '../../../types/entities'

const payloadSchema = z.object({
  branch: z.string().min(2),
  name: z.string().min(2),
  phone: z.string().regex(/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/),
  email: z.string().email(),
  description: z.string().min(10),
  policyAccepted: z.literal(true),
  recaptchaToken: z.string().optional(),
})

type ComplaintPayload = z.infer<typeof payloadSchema>

export default defineEventHandler(async (event) => {
  const body = await readBody<ComplaintFormPayload>(event)
  const parsed = payloadSchema.safeParse(body)

  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Validation failed',
      data: parsed.error.flatten().fieldErrors,
    })
  }

  await sendEmailMock(parsed.data)

  return {
    status: 'ok',
    message: 'Спасибо! Ваша претензия зарегистрирована. Мы свяжемся с вами в течение рабочего дня.',
  }
})

async function sendEmailMock(payload: ComplaintPayload) {
  console.info('[complaint-form] Новая претензия', payload)
}
