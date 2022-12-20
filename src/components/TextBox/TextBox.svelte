<script lang="ts">
	export let stacked = false;
	/**
	 * @param {number} width - Set the width of the div
	 */
	export let width = 200;
	/**
	 * @param {string} text - Text that will be on the left of the input
	 */
	export let text = '';
	/**
	 * @param {any} value - Double binded value
	 */
	export let value: any;
	export let id = 'css' + Math.random().toString(36);
	/**
	 * @param {boolean} disabled - Add a disabled state
	 */
	export let disabled = false;
</script>

<div id="{id}" class:jkere="{true}" class="{` ${stacked ? 'field-row-stacked' : 'field-row'}`}" style:width="{`300px`}">
	<label for="{id}">{text}</label>
	<input disabled="{disabled}" value="{value ?? ''}" id="{id}" type="text" />
</div>

<style>
	.jkere {
		display: grid;
		grid-template-columns: 1fr 3fr;
	}
</style>
