<script lang="ts">
	import {afterUpdate} from 'svelte';
	import {getContext, setContext} from 'svelte';
	export let label = '';
	export let id = 'ccs-' + Math.random().toString(36);
	const {add, selectedTab, update} = getContext('Hola');
	afterUpdate(() => {
		add({id, label});
	});
	$: selected = $selectedTab === id;
</script>

<button on:click|stopPropagation|preventDefault="{() => update(id)}" role="tab" aria-selected="{selected}" aria-controls="{id}">{label}</button>
