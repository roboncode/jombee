<!-- <svelte:options tag="svelte-counter" accessors={true} /> -->

<script lang="ts">
  export let name = 'world'
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<h1>Hello, {name} from Svelte.js!</h1>
<button on:click={increment}>
  Svelte Count: {count}
</button>
