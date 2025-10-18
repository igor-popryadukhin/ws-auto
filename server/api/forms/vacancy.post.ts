import { createError } from 'h3'
import { z } from 'zod'
import type { VacancyApplicationPayload } from '../../../types/entities'

const payloadSchema = z.object({
  vacancyId: z.string().min(2),
  name: z.string().min(2),
  phone: z.string().regex(/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/),
  experience: z.string().min(5),
  skills: z.array(z.string()).min(1),
  branch: z.string().min(2),
  comments: z.string().optional(),
  policyAccepted: z.literal(true),
  recaptchaToken: z.string().optional(),
})

type VacancyPayload = z.infer<typeof payloadSchema>

export default defineEventHandler(async (event) => {
  const body = await readBody<VacancyApplicationPayload>(event)
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
    message: 'Резюме успешно отправлено. HR-менеджер свяжется с вами.',
  }
})

async function sendEmailMock(payload: VacancyPayload) {
  console.info('[vacancy-form] Новая заявка', payload)
}
