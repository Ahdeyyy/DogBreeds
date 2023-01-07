<script>
	import { fly, fade } from 'svelte/transition';

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

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- TODO: page transitions -->

<main
	class="grid place-content-center px-4"
	in:fade={{ duration: 600, delay: 600 }}
	out:fade={{ duration: 600, delay: 0 }}
>
	<div class="flex space-x-8 align-middle">
		<div>
			<h1 class="text-5xl sm:text-lg md:text-2xl font-bold text-base-content mb-6">
				Dog breeds and their sub breeds
			</h1>
			<p class="">
				This is an app that shows all the dog breeds and their sub breeds. <br /> It uses the
				<a class="underline hover:decoration-2 text-primary" href="https://dog.ceo/dog-api/"
					>Dog API</a
				>
				to get the data.
			</p>

			<div class="flex my-6 space-x-9">
				<a
					class="text-primary-content
btn bg-primary py-2 px-4 rounded-lg shadow-sm hover:shadow shadow-primary hover:bg-primary-focus"
					href="/breeds">See all breeds</a
				>
				<form action="?/search" method="post" on:input|preventDefault={handleInput}>
					<input
						name="search"
						type="text"
						placeholder="Search by breed"
						bind:value={searchText}
						class="input input-bordered w-full max-w-xs"
					/>
				</form>
			</div>
			<ul class=" mx-auto w-7/12 text-center px-5 my-2 rounded-box ">
				{#each breeds as breed, i}
					<li
						in:fly={{ y: -50, duration: 1200, delay: i * 200 }}
						out:fade={{ duration: 1200, delay: i * 200 }}
						class="my-3 py-4 bg-primary text-primary-content rounded-md hover:bg-primary-focus "
					>
						<a href="/breeds/{breed}" class="text-center p-10 w-full">{breed}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="max-w-lg">
			<img
				class="mask mask-hexagon-2"
				src="https://images.dog.ceo/breeds/akita/Akita_Dog.jpg"
				alt="dog"
			/>
		</div>
	</div>
</main>
