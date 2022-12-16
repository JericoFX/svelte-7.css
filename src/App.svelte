<script>
	// @ts-nocheck

	import Window from './components/Window.svelte';
	import WindowBody from './components/Window-Body.svelte';
	import Fieldset from './components/Fieldset.svelte';
	import Button from './components/Button.svelte';
	import Checkbox from './components/Checkbox.svelte';
	import CheckboxGroup from './components/CheckboxGroup.svelte';
	import SelectGroup from './components/SelectGroup.svelte';
	import Select from './components/Select.svelte';
	import Progressbar from './components/Progressbar.svelte';
	import Tabs from './components/Tabs/Tabs.svelte';

	import Tab from './components/Tabs/Tab.svelte';
	import TabContent from './components/Tabs/TabContent.svelte';
	import TextBox from './components/TextBox/TextBox.svelte';
	import TextArea from './components/TextArea/TextArea.svelte';
	import Modal from './components/Modal/Modal.svelte';
	import ButtonGroup from './components/ButtonGroup/ButtonGroup.svelte';
	import Slider from './components/Slider/Slider.svelte';
	let select;
	let wachin = 0;
</script>

<Window class="absolute-center p-0 m-0 " title="Jerico" width="{50}" height="{100}">
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
			<SelectGroup mul>
				<Select text="Hola" value="{1}" />
				<Select text="Hola1" value="{2}" />
				<Select selected text="Hola2" value="{3}" />
				<Select text="Hola3sdadasasdasddsa" value="{4}" />
			</SelectGroup>
			<Progressbar class="w-full" type="animate" currentValue="{wachin}" />
			<Tabs class="w-full">
				<svelte:fragment slot="tabs">
					<Tab label="Reportes" />
					<Tab label="Bolos" />
				</svelte:fragment>
				<TabContent />
				<TabContent>
					<TextBox stacked text="Hola" />
					<Button text="HI" />
					<Fieldset hasLegend legendText="Observaciones">
						<TextArea stacked notResize text="Hola" />
					</Fieldset>
				</TabContent>
			</Tabs>
			<Slider isVertical text="{{first: 'Volumen:', second: 'Min', third: 'Max'}}" min="{0}" max="{10}" bind:value="{select}" />
			<Slider step="{0.5}" text="{{first: 'Volumen:', second: 'Min', third: 'Max'}}" min="{0}" max="{10}" bind:value="{select}" />
		</Fieldset>
	</WindowBody>
</Window>

<style>
	body {
		padding: 0%;
		margin: 0;
	}
	:global(p, span) {
		white-space: wrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
