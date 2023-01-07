<script>
	import SubbreedMenu from '$lib/components/subbreedMenu.svelte';
	export let image = '';
	export let name = '';
	export let subbreeds = [''];
	let has_subbreeds = subbreeds[0] !== undefined ? true : false;
</script>

<div class="flex flex-col space-y-4">
	<div class="card w-96 bg-base-100 shadow-xl">
		<div class="card-body text-center font-bold text-3xl uppercase">
			<p>{name}</p>
		</div>
		<figure><img src={image} alt={name} width="100%" class="mask mask-squircle" /></figure>
	</div>
	<div class="self-center">
		{#if subbreeds[0] !== '' || subbreeds[0] !== undefined}
			<SubbreedMenu breed_name={name} {subbreeds} />
		{/if}
	</div>
</div>
