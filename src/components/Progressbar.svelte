<script lang="ts">
	import {fade} from 'svelte/transition';
	import {tweened} from 'svelte/motion';
	import {writable} from 'svelte/store';
	import {cubicOut} from 'svelte/easing';
	import {afterUpdate} from 'svelte';
	export let min = 0;
	export let max = 100;
	export let currentValue = 1;
	export let type: 'paused' | 'error' | 'animate' | 'marquee' | '' = '';
	$: con = currentValue / 100;
	$: progress.set(con);
	const progress = tweened(con, {
		duration: 500,
		easing: cubicOut,
	});

	// afterUpdate(() => {

	// });
</script>

<div class="field-row">
	<div class="{`${type}  ${$$props.class}`}" role="progressbar" aria-valuemin="{min}" aria-valuemax="{max}" aria-valuenow="{currentValue}">
		<div transition:fade style:width="{`${$progress * 100}%`}"></div>
	</div>
</div>
