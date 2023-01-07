<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import DogCard from '$lib/components/dogCard.svelte';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>
		{data.props.subbreed}
	</title>
</svelte:head>

<main
	class="flex flex-col items-center justify-center w-full h-full"
	in:fade={{ duration: 600, delay: 600 }}
	out:fade={{ duration: 600, delay: 0 }}
>
	<div>
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body text-center font-bold text-3xl uppercase">
				<p>{data.props.subbreed}</p>
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
</main>
