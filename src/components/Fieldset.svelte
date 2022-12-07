<script>
	export let hasLegend = false;
	export let legendText = '';
</script>

<fieldset class="{`${$$props.class}`}">
	{#if hasLegend}
		<legend>{legendText}</legend>
	{/if}
	<slot />
</fieldset>
