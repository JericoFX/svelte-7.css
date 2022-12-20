/// <reference types="svelte" />
import type {SvelteComponentTyped} from 'svelte';

export interface Fieldsets {
	/**
	 * @param {boolean} hasLegend - Will add a Legend to the fieldset
	 * @default false
	 */
	hasLegend: boolean;
	/**
	 * @param {string} legendText - Text that will be on the Legend
	 */
	legendText?: string;
}

export default class Fieldset extends SvelteComponentTyped<Fieldset, {}, {default: {}}> {}
