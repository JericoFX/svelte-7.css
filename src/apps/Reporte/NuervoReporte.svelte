<script lang="ts">
	import Input from '../../components/Input.svelte';
	import Fieldset from '../../components/Fieldset.svelte';
	import Window from '../../components/Window.svelte';
	import Button from '../../components/Button.svelte';
	import Panel from '../../components/Panel.svelte';
	import {push} from 'svelte-spa-router';
	import Reportes from '../../store/reports';
	const {setNewReport, reportes} = Reportes;
	export let open = false;
	export let data = {name: '', lastname: '', job: '', rank: '', citizenid: ''};
	let dis = false
	let Info = {
		titulo: '',
		name: '',
		apellido: '',
		citizenid: '',
		vehiculo: '',
		lugar: '',
		observaciones: '',
	};
	$: if (data) {
		dis = true
		Info.name = data.name;
		Info.apellido = data.lastname;
		Info.citizenid = data.citizenid;
	}

	function openModal() {
		let m = new Panel({
			target: document.getElementById('modal'),
			props: {
				open: true,
				title: 'Reporte ID:' + 'ASDDA',
				class: 'absolute-center w-20vw h-15vh',
				bodytext: 'Reporte creado con éxito',
			},
		});
		return m;
	}
	const createNewReport = () => {
		setNewReport(Info);
		console.log(Info);
	};
</script>

{#if open}
	<div class="w-full h-full  absolute">
		<Window width="{40}" background="red-black" height="{45}" center>
			<Fieldset centerText title="Nuevo Reporte" full sharedBackground>
				<div class="w-full h-full absolute">
					<div class="flex w-full justify-center items-center">
						<Input bind:value="{Info.titulo}" class="mb-2" textSize="{1}" textwidth="{15}" type="text" text="Titulo:" />
					</div>
					<table style="width:97%;height:80%;" class="tui-table-grid float-left">
						<tbody>
							<tr>
								<td rowspan="2" width="60%">
									<Input disabled={dis} bind:value="{Info.name}" textSize="{1}" textwidth="{10}" type="text" text="Nombre.......:" />
									<Input disabled={dis} bind:value="{Info.apellido}" class="mt-2" textSize="{1}" textwidth="{10}" type="text" text="Apellido.....:" />
									<Input disabled={dis} bind:value="{Info.citizenid}" class="mt-2" textSize="{1}" textwidth="{10}" type="text" text="CitizenID....:" />
									<Input  bind:value="{Info.vehiculo}" class="mt-2" textSize="{1}" textwidth="{10}" type="text" text="Vehiculo.....:" />
									<Input  bind:value="{Info.lugar}" class="mt-2" textSize="{1}" textwidth="{10}" type="text" text="Lugar........:" />
									<Input  bind:value="{Info.observaciones}" class="mt-2" textSize="{1}" textwidth="{10}" type="textarea" text="Observaciones:" />
								</td>
							</tr>
							<tr>
								<td height="10px" width="25"> Se les recuerda a los oficiales añadir toda la informacion relacionada al reporte </td>
							</tr>
							<tr>
								<td colspan="2">
									<div class="w-full flex justify-around items-center">
										<Button colors="blue-168" text="PJ Cercano" />
										<Button colors="cyan-168" text="Current Location" />
										<Button colors="green-168" text="Policias" />
										<Button colors="orange-168" text="Evidencias" />
										<Button colors="white-168" text="Fines" />
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="w-full mt-0 h-0vh flex justify-around items-center">
						<Button on:click="{createNewReport}" colors="green-168" text="Crear Reporte" />
						<Button on:click="{() => push('/')}" colors="red-168" text="Cancelar" />
					</div>
				</div>
			</Fieldset>
		</Window>
	</div>
{/if}
