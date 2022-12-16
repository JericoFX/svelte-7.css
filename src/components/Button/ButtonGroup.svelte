<script lang="ts">
	export let center = false;
	export let around = false;
	export let between = false;
	$: select = '';
	$: if (center) {
		between = false;
		around = false;
		select = 'justify-center items-center';
	} else if (around) {
		between = false;
		center = false;
		select = 'justify-around items-center';
	} else if (between) {
		center = false;
		around = false;
		select = 'justify-between items-center';
	}
	$: console.log(select);
</script>

<div class="{`flex w-full h-full ${select}`}">
	<slot />
</div>
