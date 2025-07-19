<script lang="ts">
  import Router from 'svelte-spa-router';
  import Nav from './lib/components/Nav.svelte';
  import Footer from './lib/components/Footer.svelte';
  export let routes;
</script>

<Nav />

<main>
  <h1>Svelte Practice (+github action deploy)</h1>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
  
  <h2>Welcome to Svelte!</h2>
  <Router {routes} />
</main>

<Footer />
