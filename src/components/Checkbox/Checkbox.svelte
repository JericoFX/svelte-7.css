<script lang="ts">
	import {afterUpdate, getContext} from 'svelte';
	import {writable} from 'svelte/store';
	let ref;
	/**
	 * @param {string} text - This will be next to the checkbox
	 */
	export let text = '';
	/**
	 *  Checked - Add a checked state to the button
	 */
	export let checked = false;
	/**
	 * Value - Specify the value of the checkbox
	 */

	export let value = '';
	/**
	 * Disabled - Add a disabled state
	 */
	export let disabled = false;

	export const id = (Math.random() * 1000).toFixed(0);

	const ctx = getContext('CheckboxGroup');
	let grouped = ctx ? ctx.jere : false;
	const ul = ctx ? ctx.selec : undefined;

	if (ctx) {
		ctx.changeValue({checked, value, id});
	}
	console.log(grouped, $ul === id);

	$: checked = grouped ? $ul === id : checked;
</script>

<div class="field-row">
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
</div>
