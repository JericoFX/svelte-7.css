<script lang="ts">
		/**
	 * @param {boolean} active - Set the window to be in "active" mode or kinda like "focus" https://khang-nd.github.io/7.css/#window
	 */
	export let active = false;
			/**
	 * @param {number} width - If hasAFixedWidth is set to false this represent the max-width of the window
	 */
	export let width = 15;
			/**
	 * @param {number} height - This represent the max-height of the window
	 */
	export let height = 100;
			/**
	 * @param {boolean} hasTitleBar - This set the title of the window
	 */
	export let hasTitleBar = true;
			/**
	 * @param {string} title - title of the window
	 */
	export let title = '';
			/**
	 * @param {boolean} hasBarControls - Set to true to have buttons on the title
	 */
	export let hasBarControls = true;
			/**
	 * @param {boolean} hasAFixedWidth - if true this will set a fixed width of the window
	 */
	export let hasAFixedWidth = false;
		/**
	 * @param {number} fixedWidth - Value in VW of the window
	 */
	export let fixedWidth = 20;
	const id = 'jerico' + Math.random().toString(36);
</script>

<div id="{id}" class="{`window ${$$props.class}`}" style:width="{`${hasAFixedWidth ? fixedWidth : ''}vw`}" class:active style:max-width="{`${hasAFixedWidth ? fixedWidth : width}vw`}" style:max-height="{`${height}vh`}">
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
