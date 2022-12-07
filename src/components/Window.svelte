<script lang="ts">
export let active = false
export let width = 15
export let height = 15
export let hasTitleBar = true
export let title = ""
export let hasBarControls = true
</script>

<div  class={`window ${$$props.class}`}  class:active={active} style:max-width={`${width}vw`}  style:max-height={`${height}vh`}>
	{#if hasTitleBar}
	<div class="title-bar">
    <div class="title-bar-text">{title}</div>
		  {#if hasBarControls}
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
			{/if}
  </div>
	{/if}
<slot></slot>
</div>

