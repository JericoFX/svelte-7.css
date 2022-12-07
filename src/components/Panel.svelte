<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import Button from './Button.svelte';

	const dispatch = createEventDispatcher();
	export let open = true;
	export let title = '';
	export let bodytext = '';
	export let closeButton = true;
	// export let onClose = () => {
	// 	(open = false), dispatch('close', {});
	// };
</script>

{#if open}
	<div class="tui-overlap"></div>
	<div class="{`tui-panel red-168 z-88  ${$$props.class}`}">
		<div class="tui-panel-header w-full h-3vh ">
			<span class="text-black flex justify-center items-center h-full">{title}</span>
		</div>
		<div class="tui-panel-content absolute-center bottom-0   w-full h-50% flex justify-center items-center">
			{bodytext}
		</div>
		<div class="buttons absolute bottom-1 w-full h-20%  flex justify-around items-center">
			{#if closeButton}
				<Button on:click="{() => (open = false)}" colors="orange-168" text="Aceptar" />
			{/if}
		</div>
	</div>
{/if}
