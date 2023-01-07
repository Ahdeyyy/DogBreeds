<script>
	// Import our global CSS
	import '$lib/global.css';

	// Import our components
	import Navbar from '$lib/components/navbar.svelte';
	import NavItem from '$lib/components/navItem.svelte';
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
