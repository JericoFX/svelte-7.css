<script lang="ts">
	import {debugData} from '../../utils/debugData';
	import {Grid, Button, Window, Fieldset, Input, Row, Col, CheckboxGroup, Checkbox} from '../../components';
	import NuervoReporte from './NuervoReporte.svelte';
	function searchData() {
		let data = {
			open: true,
			name: 'Jerico',
			lastname: 'Acosta',
			job: 'Policia',
			rank: 'Sheriff',
			citizenid: 'ASD35698',
		};
		let m = new NuervoReporte({target: document.getElementById("modal"), props: {open: data.open, data: {...data}}});
		return m;
	}
</script>

<div class="w-full h-full absolute  ">
	<Window background="cyan-black" width="{30}" height="{25}" center>
		<Fieldset sharedBackground full>
			<Grid>
				<Row>
					<Col number="{12}">
						<Input type="text" class="center " text="Busqueda...:" textSize="{0.9}" />
					</Col>
				</Row>
				<Row>
					<Col number="{6}">
						<Checkbox checked text="Nombre" />
						<Checkbox text="Phone" />
						<Checkbox text="Reporte ID" />
					</Col>
				</Row>
			</Grid>

			<div class="absolute bottom-3 w-full h-3vh flex justify-around items-center">
				<Button on:click="{searchData}" text="Buscar" colors="white-168" />
				<Button text="Cancelar" colors="orange-168" />
			</div>
		</Fieldset>
	</Window>
</div>
