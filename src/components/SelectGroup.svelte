<script>
	export let value = undefined
</script>
<select bind:value={value}>
	<slot/>
</select>