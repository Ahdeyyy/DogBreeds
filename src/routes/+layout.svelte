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

{#if breeds.length > 0}
	<ul
        transition:fade
		class=" mx-auto w-7/12 text-center px-5 my-2 rounded-box "
	>
		{#each breeds as breed}
			<li
				in:fly={{ x: -250, duration: 1500 }}
				out:fly={{ x: 200, duration: 1500 }}
				class="my-2 py-4 bg-primary text-primary-content rounded-md hover:bg-primary-focus "
			>
				<a href="/breeds/{breed}" class="text-center w-full">{breed}</a>
			</li>
		{/each}
	</ul>
	<!-- content here -->
{/if}

<section>
	<slot />
</section>

<style></style>
