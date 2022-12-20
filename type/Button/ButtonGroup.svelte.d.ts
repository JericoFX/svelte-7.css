/// <reference types="svelte" />
import type {SvelteComponentTyped} from 'svelte';

export interface ButtonGroups {
	/**
	 * Center - Will use Flex to center all *the buttons
	 * @default true
	 */
	center?: boolean;
	/**
	 * Around - Will set Flex to justify-around
	 *  @default false
	 */
	around?: boolean;
	/**
	 * Between - Will set Flex to justify-between
	 * @default false
	 */
	between?: boolean;
}

export default class ButtonGroup extends SvelteComponentTyped<ButtonGroups, {}, {default: {}}> {}
