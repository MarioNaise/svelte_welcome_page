<script>
  import DeleteIcon from "./deleteIcon.svelte";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  let toDoList = [];
  let done = [];
  let newToDo = "";

  onMount(() => {
    getToDos();
  });

  function setToDos() {
    if (browser) {
      localStorage.setItem(
        "svelteWelcomePage_toDoList",
        JSON.stringify(toDoList)
      );
      localStorage.setItem("svelteWelcomePage_doneList", JSON.stringify(done));
    }
  }

  function getToDos() {
    if (browser) {
      toDoList =
        JSON.parse(localStorage.getItem("svelteWelcomePage_toDoList")) || [];
      done =
        JSON.parse(localStorage.getItem("svelteWelcomePage_doneList")) || [];
    }
  }

  const submitHandler = (e) => {
    if (e.key === "Enter") {
      const id = toDoList.at(-1)?.id + 1 || 0;
      toDoList = [...toDoList, {id, toDo: newToDo}];
      setToDos();
      newToDo = "";
    }
    if (e.key === "Escape") {
      e.target.blur();
    }
  };
</script>

<section>
  <p class="underline" style="display: block; padding: 0;">To-Do's:</p>
  {#if toDoList.length === 0}
    <p style="color: #888; padding-left: 0.3rem">No To-Do's</p>
  {/if}
  {#each toDoList as {toDo, id}}
    <ul>
      <li>
        <input
          type="checkbox"
          bind:group={done}
          on:change={() => {
            setToDos();
          }}
          value={id}
        />
        {#if done.includes(id)}
          <label style="text-decoration: line-through;" for={toDo}>{toDo}</label
          >
        {:else}
          <label for={toDo}>{toDo}</label>
        {/if}
        <button
          class="icon"
          on:click={() => {
            toDoList = toDoList.filter((item) => item.id !== id);
            done = done.filter((item) => item !== id);
            setToDos();
          }}><DeleteIcon /></button
        >
      </li>
    </ul>
  {/each}

  <input
    style="padding: 0.3rem; width:100%"
    placeholder="Add a new To-Do..."
    bind:value={newToDo}
    on:keydown={submitHandler}
  />
  {#if done.length > 0}
    <button
      style="padding-left: 0.1rem;"
      on:click={() => {
        toDoList = toDoList.filter((item) => !done.includes(item.id));
        done = [];
        setToDos();
      }}>Delete selected</button
    >
  {/if}
</section>

<style>
  li {
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0.3rem;
    margin: 0.3rem 0;
  }
  .icon {
    margin-left: auto;
  }
  button {
    background-color: inherit;
    border: none;
    width: "fit-content";
  }
  label {
    margin-left: 0.3rem;
  }
  input {
    background-color: inherit;
    border: none;
  }
  input:focus,
  input:hover,
  li:hover {
    outline: none;
    background-color: #2e2e2e;
    border-radius: 0.2rem;
  }
</style>
