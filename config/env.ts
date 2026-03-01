/**
 * Centralized environment variable constants
 * All NEXT_PUBLIC_* env vars should be accessed through this file
 */

/** Base path for the app (e.g. "/repo-name" for GitHub Pages) */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ""

/** Full site URL (e.g. "https://domain.com" or "https://user.github.io/repo") */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

/** EmailOctopus API key for the subscribe feature */
export const EMAIL_OCTOPUS_API_KEY =
  process.env.NEXT_PUBLIC_EMAIL_OCTOPUS_API_KEY

/** EmailOctopus list ID for the subscribe feature */
export const EMAIL_OCTOPUS_LIST_ID =
  process.env.NEXT_PUBLIC_EMAIL_OCTOPUS_LIST_ID
