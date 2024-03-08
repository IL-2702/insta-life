import { z } from 'zod'

export const forgotPasswordSchema = z.object({
  email: z.string().trim().email("User with this email doesn't exist").toLowerCase(),
})
