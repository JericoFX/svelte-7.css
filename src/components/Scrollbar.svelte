<script lang="ts">
	export let mwidth = 300;
	export let text = {
		first: '',
		second: '',
		third: '',
	};
	export let value = 0;
	export let min = 1;
	export let max = 10;
</script>

<div class="field-row" style:max-width="{`${mwidth}px`}">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label>{text.first}</label>
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label>{text.second}</label>
	<input type="range" min="{min}" max="{max}" value="{value}" />
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label>{text.third}</label>
</div>
