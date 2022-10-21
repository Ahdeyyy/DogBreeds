<script>

    import DogCard from '$lib/components/dogCard.svelte';
    import SubbreedMenu from '$lib/components/subbreedMenu.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
    <title>
        {data.props.breed}
    </title>
</svelte:head>

<main class="flex flex-col items-center justify-center w-full h-full">
    {#if data.props.subbreeds}
        <DogCard image={data.props.image} name={data.props.breed} subbreeds={data.props.subbreeds} />
    {:else }
        <DogCard image={data.props.image} name={data.props.breed} />
    {/if}
</main>


