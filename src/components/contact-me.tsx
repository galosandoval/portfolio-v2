"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { useToast } from "./ui/use-toast"
import { StickyTitle } from "./sticky-title"

const contactMeSchema = z.object({
  email: z.string().email(),
  message: z
    .string()
    .min(1, "Must be at least 1 character")
    .max(500, "Must be less than 500 characters")
})

export function ContactMe() {
  const form = useForm<z.infer<typeof contactMeSchema>>({
    resolver: zodResolver(contactMeSchema),
    defaultValues: {
      email: "",
      message: ""
    }
  })
  const { toast } = useToast()

  async function onSubmit(values: z.infer<typeof contactMeSchema>) {
    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })

    if (res.ok) {
      form.reset()
      toast({ description: "Your message has been sent." })
    } else {
      toast({
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      })
    }
  }

  return (
    <section id="contactMe" className="max-w-lg gap-4 pt-10 lg:pt-0">
      <StickyTitle title="Contact Me" />
      <div className="lg flex h-[75svh] flex-col justify-end xl:h-[80svh]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-8"
          >
            <p className="text-base">
              I&rsquo;m always open to new opportunities, so feel free to reach
              out.
            </p>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: recruiter@google.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none"
                      placeholder="Ex: Lets connect..."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="self-end"
              loading={form.formState.isSubmitting}
              type="submit"
            >
              Send
            </Button>
          </form>
        </Form>
      </div>
    </section>
  )
}
