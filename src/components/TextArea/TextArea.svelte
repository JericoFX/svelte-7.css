<script lang="ts">
	/**
	 * @param {string} text - Text that will be on the Text
	 */
	export let text: string = '';
	export let id = 'css' + Math.random().toString(36);
	/**
	 * @param {number} rows - Modify the amount of rows on the TextArea , Default 3
	 */
	export let rows: number = 3;
	/**
	 * @param {number} cols - Modify the amount of columns on the TextArea , Default 30
	 */
	export let cols: number = 30;

	export let stacked: boolean = false;

	/**
	 * @param {boolean} notResize - Prevent user to resize the TextArea
	 */
	export let notResize: boolean = false;
</script>

<div class="{`${stacked ? 'field-row-stacked' : 'field-row'}`}" style="width: 200px">
	<label for="{id}">{text}</label>
	<textarea style:resize="{`${notResize ? 'none' : ''}`}" id="{id}" cols="{cols}" rows="{rows}"></textarea>
</div>
