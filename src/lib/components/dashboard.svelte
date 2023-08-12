<script>
  import Error from "./error.svelte";
  import Weather from "./weatherCard.svelte";
  import ToDo from "./toDo.svelte";
  import Notes from "./notes.svelte";
  export let data;
</script>

{#await data}
  <h2>loading...</h2>
{:then data}
  {#if Boolean(data.location)}
    <h2>{data.location.name}, {data.location.country}</h2>
  {/if}
  <div>
    <Notes />
    <ToDo />
    <Weather {data} />
  </div>
{:catch err}
  <Error />
{/await}

<style>
  div {
    display: flex;
    justify-content: center;
  }
  h2 {
    font-size: 2rem;
    text-align: center;
    font-weight: 200;
    border-color: black;
  }
  :global(section) {
    margin: 2rem 1rem;
    background-color: #1a1a1a;
    border-radius: 0.5rem;
    padding: 2rem;
    min-width: 150px;
    width: 25%;
  }
  :global(p) {
    margin-bottom: 0.3rem;
  }
  :global(.underline) {
    border-bottom: 1px solid white;
    margin-bottom: 1rem;
  }
</style>
