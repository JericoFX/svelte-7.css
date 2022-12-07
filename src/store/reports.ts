import {debugData} from '../utils/debugData';
import {derived, writable} from 'svelte/store';
export const reportes = writable([{}]);
export const playerData = writable({});
const store = () => {
	const {set, subscribe, update} = writable(reportes);
	const methods = {
		setNewReport: (report) => {
			reportes.update((s) => {
				s = [...s, report];
				console.log(s);
				return s;
			});
		},
		searchPlayer: (data) => {},
	};
	return {
		set,
		subscribe,
		update,
		...methods,
	};
};
export const jere = derived(reportes, ($n) => $n.length);
export default store();
