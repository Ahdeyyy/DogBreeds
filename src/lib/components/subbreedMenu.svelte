<script>
	import { fade } from 'svelte/transition';

	export let breed_name = '';
	export let subbreeds = [''];
</script>

<div class="dropdown w-full justify-center ">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label tabindex="0" class="btn m-1 bg-primary text-primary-content hover:bg-primary-focus">Subbreeds</label>
	<ul transition:fade tabindex="0" class="dropdown-content menu p-2 shadow-lg bg-primary rounded-box w-52 text-primary-content">
		{#each subbreeds as subbreed}
			<li  class="subbreed bg-primary"><a href="/breeds/{breed_name}/{subbreed}"> {subbreed}</a></li>
		{/each}
	</ul>
</div>

<style>
	.subbreed {
		margin-left: 1rem;
	}
</style>
