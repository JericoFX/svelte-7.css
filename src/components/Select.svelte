<script>
	export let value = undefined;
	export let text = '';
	export let disabled = false;
	export let selected = false;
	const checkIfSelected = (/** @type {HTMLOptionElement} */ node) => {
		setTimeout(() => {
			node.selected = selected;
		}, 1);
	};
	export const id = (Math.random() * 1000).toFixed(0);
</script>

<option use:checkIfSelected id="{id}" disabled="{disabled}" :value="{value}">{text}</option>
