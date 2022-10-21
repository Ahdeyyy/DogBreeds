<script>
    import { page } from '$app/stores';
    
</script>

<svelte:head>
    <title>Page not found</title>
</svelte:head>

<img src="/error-dogs.gif" alt="error">

{#if $page.error }

<h1 class="alert-error text-4xl" >Error {$page.status} : {$page.error.message}</h1>

{/if}



 <style>
        h1 {
            text-align: center;
            width: 60%;
            margin: 0 auto;
        }
        img {
            display: block;
            width: 20%;
            margin: 0 auto;
            border-radius: 50%;
        }
 </style>


