<script lang="ts">
	import Fieldset from '../Fieldset/Fieldset.svelte';
	import {onMount, setContext, afterUpdate, createEventDispatcher} from 'svelte';
	import {writable, type Writable} from 'svelte/store';
	let ref;
	/**
	 * @param {any} value - Add a value to the checkbox
	 */
	export let value: any = undefined;
	/**
	 * @param {boolean} hasLegend - Check if you want a legend on the fieldset
	 */
	export let hasLegend: boolean = false;
	/**
	 * @param {string} legendText - The text off the legend
	 */
	export let legendText: string = '';
	const jere = $$slots.default;
	const dispatch = createEventDispatcher();
	const selec = writable(undefined);
	setContext('CheckboxGroup', {
		jere,
		selec,
		changeValue: ({checked, id}) => {
			if (checked) {
				$selec = id;
			}
		},
		update: (id: any) => {
			$selec = id;
			value = id;
		},
	});

	afterUpdate(() => {
		$selec = value;
	});

	selec.subscribe((values) => {
		value = values;
		dispatch('change', value);
	});

	onMount(() => {
		$selec = value;
	});
</script>

<div bind:this="{ref}" class="{`${$$props.class}`}">
	{#if hasLegend}
		<Fieldset hasLegend="{hasLegend}" legendText="{legendText}">
			<slot />
		</Fieldset>
	{:else}
		<slot />
	{/if}
</div>
