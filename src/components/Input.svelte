<script lang="ts">
	import {afterUpdate, onMount, setContext} from 'svelte';
	import {writable} from 'svelte/store';
	/**
	 * Type of item do you want to use
	 */
	export let type: 'text' | 'number' | 'password' | 'color' | 'date' | 'select' | 'datetime-local' | 'checkbox' | 'radio' | 'textarea' | 'multiple' = 'text';
	/**
	 * Check if the item is disabled, false default
	 */
	export let disabled = false;
	/**
	 * For textearea, number of rows and cols
	 * rows {default: 2}
	 * cols {default: 4}
	 */
	export let rows = 2;

	export let cols = 4;
	/**
	 * Text Descriptive
	 * TextSize = size of the text.. duhh??
	 */
	export let text = '';
	export let textSize = 1.5;
	export let textwidth = 15;
	/**
	 * Bind the selected value from a <select>
	 */

	export let id = '';
	export let select = undefined;

	const selectedValue = writable(select);
	setContext('Select', {
		selectedValue,
	});
	afterUpdate(() => {
		select = $selectedValue;
	});
	const handleChange = ({target}) => {
		let value = target.value;
		selectedValue.set(value);
	};
	export let value = '';
</script>

<div {...$$props}>
	{#if type === 'text'}
		<label class="nathing">
			<span style="{`font-size:${textSize}vw`}"> {text}</span>
			<input class:disabled bind:value disabled="{disabled}" style="{`width:${textwidth}vw`}" class="tui-input h-3vh " type="text" />
			<span></span>
		</label>
	{:else if type === 'checkbox'}
		<label class="tui-checkbox">
			{text}
			<input name="{id}" class="tui-input h-3vh " type="checkbox" />
			<span></span>
		</label>
	{:else if type === 'textarea'}
		<label class="tui-textarea">
			<span style="{`font-size:${textSize}vw`}"> {text}</span>
			<textarea bind:value style="{`width:${textwidth}vw`}" rows="{rows}" cols="{cols}" class="tui-input"></textarea>
			<span></span>
		</label>
	{:else if type === 'radio'}
		<label class="tui-radio">
			<span style="{`font-size:${textSize}vw`}"> {text}</span>
			<input name="{id}" class="tui-radio h-3vh " type="checkbox" />
			<span></span>
		</label>
	{:else if type === 'select'}
		<label>
			<span style="{`font-size:${textSize}vw`}"> {text}</span>
			<select on:change="{handleChange}" class="tui-input">
				<slot />
			</select>
		</label>
	{/if}
</div>

<style>
	textarea {
		resize: none;
	}
	.disabled {
		border: 1px solid #080808;
		background-color: #000000;
		color: #090808;
	}
</style>
