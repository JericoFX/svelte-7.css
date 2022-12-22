<script lang="ts">
	export let label = '';
	export let shortcut = '';
	export let hasDivider = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<li on:click class:has-divider="{hasDivider}" role="menuitem">
	<!-- svelte-ignore a11y-missing-attribute -->
	<a>
		{label} <span>{shortcut}</span>
	</a>
</li>
