<script>
	import BreedCard from '$lib/components/breedCard.svelte';
	import { fade } from 'svelte/transition';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Breeds</title>
</svelte:head>

<main in:fade={{ duration: 600, delay: 600 }} out:fade={{ duration: 600, delay: 0 }}>
	{#each data.breeds as [key, value]}
		<BreedCard breed_name={key} breed_link="/breeds/{key}" subbreeds={value} />
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
