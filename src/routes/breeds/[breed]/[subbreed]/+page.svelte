<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>
        {data.props.subbreed}
    </title>
</svelte:head>


{#if data}
    <img src="{ data.props.image }" alt="">
{/if}