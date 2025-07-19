<script lang="ts">
  import Router from 'svelte-spa-router';
  import Nav from './lib/components/Nav.svelte';
  import Footer from './lib/components/Footer.svelte';
  export let routes;
</script>

<Nav />

<main>
  <Router {routes} />
</main>

<Footer />
