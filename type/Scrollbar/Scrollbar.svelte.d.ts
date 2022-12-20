/// <reference types="svelte" />
import type {SvelteComponentTyped} from 'svelte';

export interface Scrollbars {
	/**
	 * Texts that will populate the scrollbar.
	 * @default ""
	 */
	text: {first: string | number; second: string | number; third: string | number};
	/**
	 * Max width in px of the scrollbar .
	 * @default 300
	 */
	mwidth?: number;
	/**
	 * value - Value setted in the input
	 * @default 0
	 */
	value?: number;
	/**
	 * Minimun value of the range.
	 * @default 1
	 */
	min: number;
	/**
	 * Maximun value of the range.
	 * @default 10
	 */
	max: number;
}

export default class Scrollbar extends SvelteComponentTyped<Scrollbars, {}, {default: {}}> {}
