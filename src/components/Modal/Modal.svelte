<script lang="ts">
	import Button from '../Button.svelte';
	import ButtonGroup from '../ButtonGroup/ButtonGroup.svelte';
	import WindowBody from '../Window-Body.svelte';
	import Window from '../Window.svelte';
	export let width = 70;
	export let open = true;
	export let oneButton = false;
	export let closeModal = () => {};
</script>

{#if open}
	<div class="modal z-66 bg-dark op-50"></div>
	<Window isModal width="{width}" class="absolute-center z-67" title="Hola">
		<WindowBody>
			<slot />
			{#if oneButton}
				<ButtonGroup center>
					<Button on:click="{closeModal}" />
				</ButtonGroup>
			{/if}
		</WindowBody>
	</Window>
{/if}

<style>
	.modal {
		width: 100%;
		height: 100%;
		position: fixed;
	}
</style>
