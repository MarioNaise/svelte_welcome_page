<script>
  import Error from "./error.svelte";
  export let data;
</script>

<section>
  {#if data.current}
    <p class="underline">Current Weather:</p>
    <p style="color: #909090;font-size: 0.7rem; margin-bottom: 1rem;">
      Last updated: {data.current["last_updated"]}
    </p>
    <p>{data.current.condition.text}</p>
    <p>Temperature: {data.current["temp_c"]}°C</p>
    <p>Feels like: {data.current["feelslike_c"]}°C</p>
    <p>Wind: {data.current["wind_kph"]}km/h</p>
    <p>Winddirection: {data.current["wind_dir"]}</p>
    <p>Humidity: {data.current["humidity"]}%</p>
    <p>Visibility: {data.current["vis_km"]}km</p>
  {:else}
    <Error message={"Couldn't fetch weather data"}/>
  {/if}
</section>

<style>
  section {
    margin: 2rem;
    background-color: #1a1a1a;
    border-radius: 0.5rem;
    max-width: fit-content;
    padding: 2rem;
  }
  p {
    margin-bottom: 0.3rem;
    max-width: fit-content;
  }
  .underline {
    border-bottom: 1px solid white;
  }
</style>
