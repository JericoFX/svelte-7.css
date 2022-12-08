<script>
	import Window from './components/Window.svelte';
	import WindowBody from './components/Window-Body.svelte';
	import Fieldset from './components/Fieldset.svelte';
	import Button from './components/Button.svelte';
	import Checkbox from './components/Checkbox.svelte';
	import CheckboxGroup from './components/CheckboxGroup.svelte';
	import SelectGroup from './components/SelectGroup.svelte';
	import Select from './components/Select.svelte';
	let select;
	$: console.log(select);
</script>

<Window class="absolute left-50% top-50% -translate-y-50% -translate-x-50%" title="Jerico" width="{50}" height="{80}">
	<WindowBody>
		<Fieldset hasLegend legendText="Hellow" class="w-30vw">
			<p>Csdlasdpa</p>
			<Button text="Jerico" />
			<CheckboxGroup fieldset hasLegend legendText="Legend HERE">
				<svelte:fragment slot="fieldset">
					<Checkbox text="Helow" />
					<Checkbox text="asd" />
				</svelte:fragment>
			</CheckboxGroup>
			<CheckboxGroup>
				<Checkbox text="No fieldset or legend here" />
				<Checkbox text="asd" />
			</CheckboxGroup>
			<!--  No legend here  -->
			<SelectGroup mul bind:value="{select}">
				<Select text="Hola" value="{1}" />
				<Select text="Hola1" value="{2}" />
				<Select text="Hola2" value="{3}" />
				<Select text="Hola3sdadasasdasddsa" value="{4}" />
			</SelectGroup>
		</Fieldset>
	</WindowBody>
</Window>

<style>
	p,
	span {
		white-space: wrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
