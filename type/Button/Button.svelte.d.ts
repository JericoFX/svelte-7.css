/// <reference types="svelte" />
import type {SvelteComponentTyped} from 'svelte';

export interface Buttons {
	/**
	 * @param {string} text - Text that will be in the button
	 */
	text: string;

	/**
	 * @param {boolean} disabled - check if the button will be disabled,
	 * @default false
	 */
	disabled?: boolean;
}

export default class Button extends SvelteComponentTyped<
	Buttons,
	{
		click: WindowEventMap['click'];
	},
	{default: {}}
> {}
