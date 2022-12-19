<script>
/**
	 * @param {boolean} hasLegend - Will add a Legend to the fieldset
	 */
	export let hasLegend = false;
	/**
	 * @param {string} legendText - Text that will be on the Legend
	 */
	export let legendText = '';
</script>

<fieldset class="{`${$$props.class}`}">
	{#if hasLegend}
		<legend>{legendText}</legend>
	{/if}
	<slot />
</fieldset>
