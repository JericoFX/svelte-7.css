<script lang="ts">
	import Shortcut from './Shortcut.svelte';
	import {push} from 'svelte-spa-router';
	/**
	 * Texto que va en el titulo
	 */
	export let text = '';
	export let shortcut = false;
	export let shortcutText = '';
	export let divider = false;
	/**
	 * Link para donde va
	 */
	export let href = '';
</script>

<li>
	<!-- svelte-ignore a11y-missing-attribute -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<a on:click on:keydown on:keyup on:keypress class="mt-1">
		<span {...$$props} class="mt-2"><span class="red-168-text">{text.slice(0, 1)}</span>{text.slice(1, 15)}</span>
		{#if shortcut}
			<Shortcut text="{shortcutText}" />
		{/if}
		{#if divider}
			<hr class="tui-divider" />
		{/if}
	</a>
</li>
