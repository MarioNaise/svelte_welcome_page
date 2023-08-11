<script>
  import Error from "./error.svelte";
  import Weather from "./weatherCard.svelte";
  export let data;
</script>

{#await data}
  <h2>loading...</h2>
{:then data}
  {#if Boolean(data.location)}
    <h2>{data.location.name}, {data.location.country}</h2>
  {/if}
  <Weather {data} />
{:catch err}
  <Error />
{/await}

<style>
  h2 {
    font-size: 2rem;
    text-align: center;
    font-weight: 200;
    border-color: black;
  }
</style>
