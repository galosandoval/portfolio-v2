import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"
import { EmailTemplate } from "~/components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactMeSchema = z.object({
  email: z.string().email(),
  message: z
    .string()
    .min(1, "Must be at least 1 character")
    .max(500, "Must be less than 500 characters")
})

export async function POST(request: Request) {
  const input = contactMeSchema.parse(await request.json())

  try {
    const data = await resend.emails.send({
      from: "portfolio@resend.dev",
      to: ["galosan92@gmail.com"],
      subject: `${input.email} wants to connect!`,
      react: EmailTemplate({ message: input.message, email: input.email })
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
