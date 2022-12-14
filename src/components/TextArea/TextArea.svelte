<script lang="ts">
	export let text: string = '';
	export let id = 'css' + Math.random().toString(36);
	export let rows: number = 3;
	export let cols: number = 30;
	export let stacked: boolean = false;
	export let notResize: boolean = false;
</script>

<div class="{`${stacked ? 'field-row-stacked' : 'field-row'}`}" style="width: 200px">
	<label for="{id}">{text}</label>
	<textarea style:resize="{`${notResize ? 'none' : ''}`}" id="{id}" cols="{cols}" rows="{rows}"></textarea>
</div>
