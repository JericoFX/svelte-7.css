<script lang="ts">
	import Fieldset from '../../components/Fieldset.svelte';
	import {push} from 'svelte-spa-router';
	import {Navbar, NavbarDropDown, NavbarItem} from '../../components';
	import {jere, reportes} from '../../store/reports';
	$: console.log($jere, $reportes);
</script>

<div>
	<Navbar>
		<NavbarDropDown text="Reporte">
			<NavbarItem on:click="{() => push('/Reporte')}" text="Nuevo Reporte" />
			<NavbarItem text="Buscar Reporte" />
			<NavbarItem text="Salir" shortcut shortcutText="ESC" />
		</NavbarDropDown>
		<NavbarDropDown text="Personas">
			<NavbarItem shortcut shortcutText="F2" text="Buscar Personas" />
			<NavbarItem shortcut shortcutText="F3" text="Nuevo Bolo" />
		</NavbarDropDown>
		<NavbarDropDown text="Vehiculos">
			<NavbarItem shortcut shortcutText="F2" text="Buscar Vehiculos" />
			<NavbarItem shortcut shortcutText="F3" text="Nuevo Bolo" />
		</NavbarDropDown>
		<NavbarDropDown text="Mi Info">
			<NavbarItem shortcut shortcutText="F2" text="Informacion" />
		</NavbarDropDown>
		<NavbarItem text="Chat" />
		<NavbarItem text="Dispatch" />
	</Navbar>

	<!-- Table structure -->
	<div class="w-full h-full absolute  top-3">
		<Fieldset full class="text-white top-2" centerText title="Home Screen" />
		<!-- <table height="30%" width="100%" class="tui-table striped-red hovered-cyan">
			<thead>
				<tr>
					<th>Title</th>
					<th>Name</th>
					<th>Apellido</th>
					<th>Lugar</th>
				</tr>
			</thead>
			<tbody>
				{#each $reportes as rep}
					<tr>
						<td>{rep.titulo}</td>
						<td>{rep.name}</td>
						<td>{rep.apellido}</td>
						<td>{rep.lugar}</td>
					</tr>
				{/each}
			</tbody>
			<tfoot>
				<tr>
					<th>name</th>
					<th>name</th>
					<th>name</th>
				</tr>
			</tfoot>
		</table>
		<table height="30%" width="100%" class="tui-table hovered-cyan">
			<thead>
				<tr width="5vw">
					<th>Report ID:</th>
					<th>Titulo</th>
					<th>Observ</th>
				</tr>
			</thead>
			<tbody>
				<tr> </tr>
				<tr> </tr>
				<tr> </tr>
			</tbody>
			<tfoot> </tfoot>
		</table> -->
	</div>
</div>
