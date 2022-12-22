<script lang="ts">
	export let label = '';

	export let isSubMenu = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<li on:click role="menuitem" tabindex="0">
	{#if isSubMenu}
		{label}
		<ul role="menu">
			<slot />
		</ul>
	{:else}
		{label}
	{/if}
</li>
