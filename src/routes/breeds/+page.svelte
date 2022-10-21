<script>

    import BreedCard from '$lib/components/breedCard.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    
    
</script>

<svelte:head>
    <title>
        Breeds
    </title>
</svelte:head>

<main>
    {#each data.breeds as [key,value] }
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

