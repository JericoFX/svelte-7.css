<script lang="ts">
	import Fieldset from './Fieldset.svelte';
	import {onMount, setContext, afterUpdate, createEventDispatcher} from 'svelte';
	import {writable, type Writable} from 'svelte/store';
	export let value: any = undefined;
	export let fieldset: boolean = false;
	export let hasLegend: boolean = false;
	export let row = false;
	export let collumn = false;
	export let legendText: string = '';
	const dispatch = createEventDispatcher();
	const selectedValue: Writable<any> = writable(value);
	setContext('CheckboxGroup', {
		selectedValue,
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
	{#if $$slots.fieldset}
		<Fieldset hasLegend="{hasLegend}" legendText="{legendText}">
			<slot name="fieldset" />
		</Fieldset>
	{:else}
		<slot />
	{/if}
</div>
