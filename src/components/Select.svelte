<script>
	export let value = undefined
	export let text = ""
	export let selected = false
</script>
<option {selected} value={value} >{text}</option>