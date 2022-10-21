<script>
    import SubbreedMenu from '$lib/components/subbreedMenu.svelte';
    export let image = '';
    export let name = '';
    export let subbreeds = [''];
    let has_subbreeds = subbreeds[0] !== undefined ? true : false;
</script>

<div>
    
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body text-center font-bold text-3xl">
          <h2 class="card-title px-14 mx-20 text-3xl ">🐶</h2>
          <p>{ name }</p>
        </div>
        <figure><img src={image} alt={name} width="100%" class="mask mask-squircle" /></figure>
    </div>
    {#if has_subbreeds}
        <SubbreedMenu breed_name={name} {subbreeds} />
    {/if}

</div>