<script lang="ts">
	export let active = false;
	export let width = 15;
	export let height = 100;
	export let hasTitleBar = true;
	export let title = '';
	export let hasBarControls = true;
	export let isModal = false;
	export let fixedWidth = 20;
	const id = 'jerico' + Math.random().toString(36);
</script>

<div id="{id}" class="{`window ${$$props.class}`}" style:width="{`${isModal ? fixedWidth : ''}vw`}" class:active style:max-width="{`${isModal ? fixedWidth : width}vw`}" style:max-height="{`${height}vh`}">
	{#if hasTitleBar}
		<div class="title-bar">
			<div class="title-bar-text">{title}</div>
			{#if hasBarControls}
				<div class="title-bar-controls">
					<button on:click aria-label="Close"></button>
				</div>
			{/if}
		</div>
	{/if}
	<slot />
</div>
