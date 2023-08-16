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
    background: linear-gradient(
      0deg,
      #000 0%,
      #2e2e2e 100%
    );
  }
</style>
