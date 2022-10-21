<script>

</script>

<svelte:head>
    <title>
        Home
    </title>
</svelte:head>

<main>
    <div class="hero min-h-screen" style="background-image: url(https://placeimg.com/1000/800/arch);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">🐕</h1>
            <p class="mb-5">A collection of dogs, their breeds and subbreeds</p>
            <a sveltekit:prefetch href="/breeds" class="btn btn-primary">Get Started</a>
          </div>
        </div>
      </div>
</main>
