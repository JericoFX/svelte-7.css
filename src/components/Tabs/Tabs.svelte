<script lang="ts">
	import {onMount, setContext} from 'svelte';
	import {writable, derived} from 'svelte/store';
	import {afterUpdate} from 'svelte';
	const tabs = writable([]);
	const selectedTab = writable(undefined);
	const content = writable([]);
	const selectedContent = writable([]);
	const contentById = derived(content, (_) => _.reduce((a, c) => ({...a, [c.id]: c}), {}));
	export let hasbeenSelected = writable(false);
	setContext('Hola', {
		tabs,
		content,
		contentById,
		selectedTab,
		selectedContent,
		hasbeenSelected,
		add: (data: any) => {
			tabs.update((s: string | any[]) => [...s, {...data, index: s.length}]);
		},
		addContent: (data: any) => {
			content.update((s: string | any[]) => [...s, {...data, index: s.length}]);
		},
		update: (id: string | number) => {
			let data = $tabs.filter((s) => s.id === id)[0];
			let a = $content.filter((s) => s.index === data.index)[0];
			$selectedTab = data.id;
			$hasbeenSelected = $selectedTab === id;
			$selectedContent = a.id;
		},
		updateContent: (id: any) => {
			const data = $content.filter((s) => s.id === id)[0];
			$selectedContent = data.id;
		},
	});
</script>

<section class="{`tabs ${$$props.class}`}">
	<menu role="tablist" aria-label="Sample Tabs">
		<slot name="tabs" />
	</menu>
	<slot />
</section>
