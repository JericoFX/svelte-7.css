<script lang="ts">
	import {onMount} from 'svelte';

	export let ref;
	/**
	 * @param {string} text - Text that will be in the button
	 */
	export let text = '';
	/**
	 * @param {boolean} disabled - check if the button will be disabled
	 */
	export let disabled = false;
	onMount(() => {
		if (ref.className === 'field-row') {
			ref.style.margin = 0;
		}
	});
</script>

<div bind:this="{ref}" class="field-row">
	<button on:click disabled="{disabled}">{text}</button>
</div>
