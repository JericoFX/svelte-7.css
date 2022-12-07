<script lang="ts">
	import {getContext, setContext} from 'svelte';
	import {writable} from 'svelte/store';
	/**
	 * @param text - Text that will go in the checkbox
	 */
	export let text = '';
	export let checked = false;
	export let value = '';
	export let disabled = false;
	export const id = (Math.random() * 1000).toFixed(0);

	const ctx = getContext('CheckboxGroup');
	const selectedValue = ctx ? ctx.selectedValue : writable(checked ? value : undefined);
	if (ctx) {
		ctx.changeValue({checked, value});
	}
	$: checked = $selectedValue === id;
</script>

<input
	disabled="{disabled}"
	type="checkbox"
	id="{id}"
	value="{value}"
	bind:checked="{checked}"
	on:change="{() => {
		if (ctx) {
			ctx.update(id);
		}
	}}"
/>

<label disabled="{disabled}" checked="{checked}" for="{id}">{text}</label>
