<script>
	import SubbreedMenu from '$lib/components/subbreedMenu.svelte';

	export let breed_name = '';
	export let breed_link = '';
	export let subbreeds = [''];
	let has_subbreeds = subbreeds[0] !== undefined ? true : false;
</script>

<div class="m-10" >
	<article class="card w-96 shadow-xl">
		<section class="card-body">
			<h2 class="card-title text-2xl">🐕‍🦺</h2>
			<p class="text-3xl font-extrabold " >{breed_name}</p>
			<div class="card-actions justify-end">
				<a sveltekit:prefetch class="btn btn-primary-focus" href={breed_link}>View</a>
			</div>
		</section>
	</article>
	{#if has_subbreeds}
		<SubbreedMenu {breed_name} {subbreeds} />
	{/if}

</div>

