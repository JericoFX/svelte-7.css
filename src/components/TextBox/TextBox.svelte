<script lang="ts">
	export let stacked = false;
	export let width = 200;
	export let text = '';
	export let value: any;
	export let id = 'css' + Math.random().toString(36);
	export let disabled = false;
</script>

<div class="{`${stacked ? 'field-row-stacked' : 'field-row'}`}" style:width="{`${width}px`}">
	<label for="{id}">{text}</label>
	<input disabled="{disabled}" value="{value ?? ''}" id="{id}" type="text" />
</div>
