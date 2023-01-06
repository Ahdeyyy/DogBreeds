<script>
	import { fly, fade } from 'svelte/transition';

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
	<a href="/" class="navbar-start text-4xl">🐶</a>
	<div class="navbar-end">
		<NavItem item_name="Breeds" item_link="/breeds" />
	</div>
</Navbar>
<section class="container mx-auto">
	<slot />
</section>

<style></style>
