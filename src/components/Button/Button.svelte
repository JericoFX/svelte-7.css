<script lang="ts">
	/**
	 * @param {string} text - Text that will be in the button
	 */
	export let text = '';
	/**
	 * @param {boolean} disabled - check if the button will be disabled
	 */
	export let disabled = false;
</script>

<div class="field-row">
	<button on:click disabled="{disabled}">{text}</button>
</div>
