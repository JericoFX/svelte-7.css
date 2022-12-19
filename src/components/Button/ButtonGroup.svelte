<script lang="ts">
	/**
	 * @param {boolean} center - Will use Flex to center the buttons
	 */
	export let center = false;
		/**
	 * @param {boolean} around - Will use Flex to put the buttons with justify-around
	 */
	export let around = false;
		/**
	 * @param {boolean} around - Will use Flex to put the buttons with justify-around
	 */
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
</script>

<div class="{`flex w-full h-full ${select}`}">
	<slot />
</div>
