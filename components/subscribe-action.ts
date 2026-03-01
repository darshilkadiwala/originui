import { z } from "zod"

import { EMAIL_OCTOPUS_API_KEY, EMAIL_OCTOPUS_LIST_ID } from "@/config/env"

type EmailOctopusError = {
  code?: string
  detail?: string
  title?: string
}

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

type SubscribeResult = { success: true } | { success: false; error: string }

export async function subscribe(email: string): Promise<SubscribeResult> {
  const apiKey = EMAIL_OCTOPUS_API_KEY
  const listId = EMAIL_OCTOPUS_LIST_ID

  if (!apiKey || !listId) {
    throw new Error("Missing required environment variables")
  }

  const result = subscribeSchema.safeParse({ email: email.trim() })
  if (!result.success) {
    return {
      success: false,
      error: result.error.errors[0]?.message || "Invalid email format.",
    }
  }

  try {
    const response = await fetch(
      `https://api.emailoctopus.com/lists/${listId}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email_address: result.data.email,
          status: "subscribed",
          fields: {},
          tags: [],
        }),
      }
    )

    const data = (await response.json()) as EmailOctopusError

    if (!response.ok) {
      if (response.status === 429) {
        return {
          success: false,
          error: "Too many attempts. Please try again later.",
        }
      }

      return {
        success: false,
        error: data.detail || data.title || "Failed to subscribe.",
      }
    }

    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to subscribe.",
    }
  }
}
