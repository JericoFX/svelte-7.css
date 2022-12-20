/// <reference types="svelte" />
import type {SvelteComponentTyped} from 'svelte';

export interface Checkboxs {
	/**
	 * @param {string} text - This will be next to the checkbox.
	 */
	text: string;
	/**
	 * @param {boolean} checked - Add a checked state to the button.
	 */
	checked?: boolean;
	/**
	 * @param {any} value - Specify the value of the checkbox.
	 */
	value?: boolean;
	/**
	 * @param {boolean} disabled - Add a disabled state to the checkbox.
	 */
	disabled?: boolean;
}

export default class Checkbox extends SvelteComponentTyped<Checkboxs, {click: WindowEventMap['click']}, {default: {}}> {}
