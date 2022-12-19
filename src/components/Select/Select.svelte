<script>
	/**
	 * @param {undefined} value - Value assigned to the Select
	 */
	export let value = undefined;
	/**
	 * @param {string} text - Text that will show it on the options
	 */
	export let text = '';
		/**
	 * @param {boolean} disabled - Set the option to disabled
	 */
	export let disabled = false;
		/**
	 * @param {boolean} selected - Set the option to be selected
	 */
	export let selected = false;

	const checkIfSelected = (/** @type {HTMLOptionElement} */ node) => {
		setTimeout(() => {
			node.selected = selected;
		}, 1);
	};
	export const id = (Math.random() * 1000).toFixed(0);
</script>

<option use:checkIfSelected id="{id}" disabled="{disabled}" :value="{value}">{text}</option>
