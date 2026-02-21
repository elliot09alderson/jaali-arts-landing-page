/**
 * Centralised API client for the JAAli Arts landing page.
 *
 * Base URL is controlled by a single env variable:
 *   VITE_API_URL=/api   (default — works with Vite proxy in dev & nginx in prod)
 *
 * Every fetch call in the landing page must go through this module so that
 * changing the backend address only ever requires updating .env.
 */

const BASE_URL = (import.meta.env.VITE_API_URL ?? '/api').replace(/\/$/, '')

async function request(method, endpoint, body) {
    const options = {
        method,
        headers: { 'Content-Type': 'application/json' },
    }

    if (body !== undefined) {
        options.body = JSON.stringify(body)
    }

    const res = await fetch(`${BASE_URL}${endpoint}`, options)

    // Parse JSON regardless of status so we can surface the server's message
    const json = await res.json().catch(() => ({}))

    if (!res.ok) {
        const message = json?.message || `Request failed with status ${res.status}`
        throw new Error(message)
    }

    return json
}

// ── Public endpoints used by the landing page ──────────────

export const consultationAPI = {
    /** POST /api/consultations  — submit a consultation request */
    create: (data) => request('POST', '/consultations', data),
}
