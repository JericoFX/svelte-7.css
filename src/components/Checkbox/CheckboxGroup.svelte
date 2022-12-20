<script lang="ts">
	import Fieldset from '../Fieldset/Fieldset.svelte';
	import {onMount, setContext, afterUpdate, createEventDispatcher} from 'svelte';
	import {writable, type Writable} from 'svelte/store';
	/**
	 * @param {any} value - Add a value to the checkbox
	 */
	export let value: any = undefined;
	/**
	 * @param {boolean} hasFieldset - Add a fieldset on the component
	 */
	export let hasFieldset: boolean = false;
	/**
	 * @param {string} legendText - The text off the legend
	 */
	export let legendText: string = '';
	const jere = $$slots.default;
	const dispatch = createEventDispatcher();
	const selectedValue: Writable<any> = writable(value);
	setContext('CheckboxGroup', {
		selectedValue,
		jere,
		changeValue: ({checked, value}) => {
			if (checked) {
				selectedValue.set(value);
			}
		},
		update: (values: any) => {
			value = values;
		},
	});

	afterUpdate(() => {
		$selectedValue = value;
	});
	selectedValue.subscribe((values) => {
		value = values;
		dispatch('change', value);
	});
	onMount(() => {
		$selectedValue = value;
	});
</script>

<div class="{`${$$props.class}`}">
	{#if hasFieldset}
		<Fieldset hasLegend="{legendText.length > 1}" legendText="{legendText}">
			<slot />
		</Fieldset>
	{:else}
		<slot />
	{/if}
</div>
