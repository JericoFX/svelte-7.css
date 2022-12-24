<script lang="ts">
	/**
	 * @param {boolean} isVertical - Put the slider vertical
	 */
	export let isVertical = false;
	/**
	 * @param {string} text - An object with 3 text
	 */
	export let text = {first: '', second: '', third: ''};
	/**
	 * @param {number} min - Min value of the slider
	 */
	export let min = 1;
	/**
	 * @param {number} max - Max value of the slider
	 */
	export let max = 11;
	/**
	 * @param {number} value - Current value of the slider
	 */
	export let value = 0;
	/**
	 * @param {number} step - Step of the slider
	 */
	export let step = 1;
	/**
	 * This function will prevent the person to spam the slider because each time the person change the slider will throw an event to update the value because is 2 way binding, with this will only catch the value when the person release the mouse button.
	 */
	const wachin = (e) => {
		value = e.target.value;
	};
</script>

<div class="field-row" style="max-width: 300px">
	{#if isVertical}
		<div class="field-row">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label>{text.first}</label>
			<div class="is-vertical">
				<input class="has-box-indicator" type="range" on:mouseup="{wachin}" min="{min}" max="{max}" step="{step}" value="{value}" />
			</div>
		</div>
	{:else}
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>{text.first}</label>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>{text.second}</label>
		<input type="range" min="{min}" step="{step}" max="{max}" on:mouseup="{wachin}" value="{min}" />
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>{text.third}</label>
	{/if}
</div>
