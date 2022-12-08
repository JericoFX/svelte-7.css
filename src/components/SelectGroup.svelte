<script>
	/**
	 * @param {undefined} value - use to bind 2 ways the value of the selected option
	 */
	export let value = undefined;
	/**
	 * @param {boolean} mul - check if you want to render the selected in one list
	 */
	export let mul = false;
	/**
	 * @param {HTMLSelectElement} node
	 */
	function typeAction(node) {
		node.multiple = mul;
	}
</script>

<select class="{`${$$props.class}`}" use:typeAction bind:value="{value}">
	<slot />
</select>
