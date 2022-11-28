import { redirect } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

// https://kit.svelte.dev/docs/routing#server
export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData()
	const data = Object.fromEntries(formData)

	// do whatever you want
	console.log(data)

	throw redirect(303, '/')
}
