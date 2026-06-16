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

// Basic in-memory rate limit: max requests per IP within the window.
// Note: this resets on cold starts and isn't shared across serverless
// instances. It's a lightweight first line of defense — for stronger
// guarantees back it with a shared store (e.g. Upstash Redis).
const RATE_LIMIT = 5
const WINDOW_MS = 60_000
const hits = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const entry = hits.get(ip)

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  entry.count += 1
  return entry.count > RATE_LIMIT
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    )
  }

  const parsed = contactMeSchema.safeParse(await request.json())

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input." }, { status: 400 })
  }

  const input = parsed.data

  try {
    const data = await resend.emails.send({
      from: "portfolio@resend.dev",
      to: ["galosan92@gmail.com"],
      subject: `${input.email} wants to connect!`,
      react: EmailTemplate({ message: input.message, email: input.email })
    })

    return NextResponse.json(data)
  } catch {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    )
  }
}
