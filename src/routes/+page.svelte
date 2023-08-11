<script>
  import Dashboard from "../lib/components/dashboard.svelte";
  import Greeting from "../lib/components/greeting.svelte";
  export let data;
</script>

<Greeting />
<main>
  <Dashboard {data} />
</main>

<style>
  main {
    height: 100%;
  }
</style>
