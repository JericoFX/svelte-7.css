import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import Unocss from 'unocss/vite';
import {presetUno} from 'unocss';
import presetIcons from '@unocss/preset-icons';
import presetAttributify from '@unocss/preset-attributify';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			/* plugin options */
		}),
		Unocss({
			presets: [presetUno(), presetAttributify(), presetIcons()],
			rules: [
				['absolute-center', {position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}],
				['absolute-top-center', {position: 'absolute', top: '1%', left: '50%', transform: 'translate(-50%, -50%)'}],
				['absolute-bottom-center', {position: 'absolute', bottom: '1%', left: '50%', transform: 'translate(-50%, -50%)'}],
				['fit', {width: '100%', height: '100%'}],
				['inn', {width: '80%', height: '5vh', 'background-color': 'transparent !important', color: 'white', 'font-width': '300', 'font-size': '2vw', 'border-radius': '0', 'text-align': 'center'}],
			],
			shortcuts: [
				{
					btnn: 'text-center text-white color-white fw-600 bg-dark  h-10 text-5 border-0 shadow-sm active:border-0  focus:border-0 shadow-dark mb-10',
				},
			],
			modes: 'svelte-scoped',
		}),
	],
});
