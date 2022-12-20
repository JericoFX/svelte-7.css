/// <reference types="svelte" />
import type {SvelteComponentTyped} from 'svelte';

export interface Progressbars {
	/**
	 * @param {number} min - Minimun value of the progressbar
	 * @default 0
	 */
	min: number;
	/**
	 * @param {number} max - Maximun value of the progressbar.
	 * @default 100
	 */
	max?: number;
	/**
	 * @param {number} currentValue - Reactive value to set the progressbar
	 */
	currentValue: number;
	/**
	 * Type of the progressbar
	 * https://khang-nd.github.io/7.css/#progressbar
	 */
	type: 'paused' | 'error' | 'animate' | 'marquee';
}

export default class Progressbar extends SvelteComponentTyped<Progressbars, {}, {default: {}}> {}
