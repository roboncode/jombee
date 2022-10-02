import SvelteCounter from './lib/Counter.svelte';
import WebComponent from 'svelte-tag'

new WebComponent({ component: SvelteCounter, tagname: "svelte-counter", attributes: ["name"] })
