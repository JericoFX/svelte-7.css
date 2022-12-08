<script>
	import {getContext} from 'svelte';
	import {writable} from 'svelte/store';

	export let value = undefined;
	export let text = '';
</script>

<option value="{value}">{text}</option>
