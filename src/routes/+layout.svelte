<script>
	import { fly,fade } from 'svelte/transition';

	// Import our global CSS
	import '$lib/global.css';

	// Import our components
	import Navbar from '$lib/components/navbar.svelte';
	import NavItem from '$lib/components/navItem.svelte';

	let searchText = '';

	/** @type string[] */
	let breeds = [];

	async function handleInput() {
		if (searchText !== '') {
			const response = await fetch('https://dog.ceo/api/breeds/list/all');
			const json = await response.json();

			breeds = Object.keys(json.message);
			breeds = breeds.map((breed) => breed.toLowerCase());

			breeds = breeds.filter((breed) => breed.includes(searchText.toLowerCase()));
			breeds = breeds.slice(0, 5);
		} else {
			breeds = [];
		}
	}
</script>

<Navbar>
	<a sveltekit:prefetch href="/" class="navbar-start text-4xl">🐶</a>
	<div class="navbar-end">
		<form action="?/search" method="post" on:input|preventDefault={handleInput}>
			<input
				name="search"
				type="text"
				placeholder="Search by breed"
				bind:value={searchText}
				class="input input-bordered input-primary w-full max-w-xs"
			/>
		</form>

		<NavItem item_name="Breeds" item_link="/breeds" />
	</div>
</Navbar>


	<ul
		class=" mx-auto w-7/12 text-center px-5 my-2 rounded-box "
	>
		{#each breeds as breed , i }
			<li
				in:fly={{ y: -250, duration: 1200 , delay: i * 200 }}
				out:fade={{ duration: 1200  , delay: i * 200 }}
				class="my-2 py-4 bg-primary text-primary-content rounded-md hover:bg-primary-focus "
			>
				<a sveltekit:prefetch href="/breeds/{breed}" class="text-center p-10 w-full">{breed}</a>
			</li>
		{/each}
	</ul>


<section>
	<slot />
</section>

<style></style>
