/// <reference types="svelte" />
import type {SvelteComponentTyped} from 'svelte';

export interface CheckboxGroups {
	/**
	 * @param {any} value - Add a value to the checkbox
	 */
	value: any;
	/**
	 * @param {boolean} hasLegend - Check if you want a legend on the fieldset
	 */
	hasLegend?: boolean;
	/**
	 * @param {string} legendText - If hasLegend is true, add the text here.
	 */
	legendText?: boolean;
}

export default class CheckboxGroup extends SvelteComponentTyped<CheckboxGroups, {click: WindowEventMap['click']}, {default: {}}> {}
