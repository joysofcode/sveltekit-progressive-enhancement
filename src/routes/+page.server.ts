import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

let count = 0

export const load: PageServerLoad = () => {
	console.log('+page.svelte load function')
	return { count: (count += 1) }
}

export const actions: Actions = {
	login: async ({ request }) => {
		const formData = await request.formData()
		const data = Object.fromEntries(formData)

		// do whatever you want
		console.log(data)

		throw redirect(303, '/')
	},
}
