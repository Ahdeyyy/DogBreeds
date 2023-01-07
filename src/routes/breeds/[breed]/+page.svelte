<script>
	import DogCard from '$lib/components/dogCard.svelte';
	import { fade } from 'svelte/transition';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>
		{data.props.breed}
	</title>
</svelte:head>

<main
	class="flex flex-col items-center justify-center w-full h-full"
	in:fade={{ duration: 600, delay: 600 }}
	out:fade={{ duration: 600, delay: 0 }}
>
	{#if data.props.subbreeds.length !== 0}
		<DogCard image={data.props.image} name={data.props.breed} subbreeds={data.props.subbreeds} />
	{:else}
		<div>
			<div class="card w-96 bg-base-100 shadow-xl">
				<div class="card-body text-center font-bold text-3xl uppercase">
					<p>{data.props.breed}</p>
				</div>
				<figure>
					<img
						src={data.props.image}
						alt={data.props.image}
						width="100%"
						class="mask mask-squircle"
					/>
				</figure>
			</div>
		</div>
	{/if}
</main>
