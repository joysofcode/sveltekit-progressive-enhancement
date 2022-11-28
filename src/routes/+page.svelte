<script lang="ts">
	import { enhance } from '$app/forms'
	import type { PageServerData } from './$types'

	export let data: PageServerData
	$: console.log(data.count)

	/*
	async function handleSubmit(event: SubmitEvent) {
		const form = event.target as HTMLFormElement
		const data = new FormData(form)

		await fetch(form.action, {
			method: form.method,
			body: data,
			// optional, the browser can handle this 😎
			// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#body
			// headers: { 'Content-Type': 'form-data' },
		})
	}
	*/
</script>

<!-- Progressive enhancement 🪄 -->

<form
	method="POST"
	action="?/login"
	use:enhance
	class="w-96 grid gap-8 mx-auto p-8 bg-neutral-800/50 border border-neutral-700/20 rounded-2xl shadow-lg"
>
	<label class="grid gap-2">
		<span class="font-semibold">Email</span>
		<input
			class="p-4 bg-neutral-800/60 border border-neutral-700/20 rounded-2xl shadow-md"
			type="email"
			name="email"
		/>
	</label>

	<label class="grid gap-2">
		<span class="font-semibold">Password</span>
		<input
			class="p-4 bg-neutral-800/60 border border-neutral-700/20 rounded-2xl shadow-md"
			type="password"
			name="password"
		/>
	</label>

	<button
		class="p-4 mt-4 rounded-2xl bg-green-300 hover:bg-green-200 text-green-900 font-semibold shadow-md transition-colors"
		type="submit">Login</button
	>
</form>

<!-- Do it yourself 💪 -->

<!--
<form
	method="POST"
	action="/api/login"
	on:submit|preventDefault={handleSubmit}
	class="w-96 grid gap-8 mx-auto p-8 bg-neutral-800/50 border border-neutral-700/20 rounded-2xl shadow-lg"
>
	<label class="grid gap-2">
		<span class="font-semibold">Email</span>
		<input
			class="p-4 bg-neutral-800/60 border border-neutral-700/20 rounded-2xl shadow-md"
			type="email"
			name="email"
		/>
	</label>

	<label class="grid gap-2">
		<span class="font-semibold">Password</span>
		<input
			class="p-4 bg-neutral-800/60 border border-neutral-700/20 rounded-2xl shadow-md"
			type="password"
			name="password"
		/>
	</label>

	<button
		class="p-4 mt-4 rounded-2xl bg-green-300 hover:bg-green-200 text-green-900 font-semibold shadow-md transition-colors"
		type="submit">Login</button
	>
</form>
-->
