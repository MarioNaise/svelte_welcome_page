<script>
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  let notes = "";

  onMount(() => {
    getNotes();
  });

  function getNotes() {
    if (browser) {
      notes =
        localStorage.getItem("svelteWelcomePage_notes");
    }
  }
</script>

<section>
  <p class="underline">Notes:</p>
  <textarea
    value={notes}
    placeholder="Add notes here..."
    on:input={(e) => {
      notes = e.target.value;
      if (browser) {
        localStorage.setItem("svelteWelcomePage_notes", notes);
      }
    }}
  />
</section>

<style>
  textarea {
    border: none;
    background-color: inherit;
    width: 100%;
    height: 90%;
    max-width: 100%;
    overflow: scroll;
  }
  textarea:focus {
    outline: none;
  }
</style>
