<script>
  import Error from "./error.svelte";
  export let data;
</script>

<section>
  {#if data.current}
    <p class="underline">Current Weather:</p>
    <p>{data.current.condition.text}</p>
    <p>Temperature: {data.current["temp_c"]}°C</p>
    <p>Feels like: {data.current["feelslike_c"]}°C</p>
    <p>Wind: {data.current["wind_kph"]}km/h</p>
    <p>Winddirection: {data.current["wind_dir"]}</p>
    <p>Humidity: {data.current["humidity"]}%</p>
    <p>Visibility: {data.current["vis_km"]}km</p>
    <p style="color: #888;font-size: 0.7rem;">
      Last updated: {data.current["last_updated"]}
    </p>
  {:else}
    <Error message={"Couldn't fetch weather data"} />
  {/if}
</section>
