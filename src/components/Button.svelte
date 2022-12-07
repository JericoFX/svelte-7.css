<script lang="ts">
	/**
	 * @param text - Text that will be in the button
	 */
	export let text = '';
	/**
	 * @param disabled - check if the button will be disabled
	 */
	export let disabled = false;
</script>

<button on:click disabled="{disabled}">{text}</button>
