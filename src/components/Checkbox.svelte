<script lang="ts">
	import {getContext} from 'svelte';
	import {writable} from 'svelte/store';
	/**
	 * @param {string} text - This will be next to the checkbox
	 */
	export let text = '';
	/**
	 * @param {boolean} checked - Add a checked state to the button
	 */
	export let checked = false;
	/**
	 * @param {any} value - Specify the value of the checkbox
	 */
	export let value = '';
	/**
	 * @param {boolean} disabled - Add a disabled state
	 */
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
			ctx?.update(id);
		}
	}}"
/>

<label disabled="{disabled}" checked="{checked}" for="{id}">{text}</label>
