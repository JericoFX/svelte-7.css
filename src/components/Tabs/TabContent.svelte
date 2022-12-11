<script lang="ts">
	export let id = 'ccs-' + Math.random().toString(36);
	import {getContext} from 'svelte';
	import {afterUpdate} from 'svelte';
	const {selectedContent, hasbeenSelected, addContent} = getContext('Hola');
	afterUpdate(() => {
		addContent({id});
	});
	$: selected = $hasbeenSelected && $selectedContent === id;
</script>

<article hidden="{!selected}" role="tabpanel" id="{id}">
	<slot />
</article>
