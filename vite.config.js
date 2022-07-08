import { sveltekit } from '@sveltejs/kit/vite';
import UnoCss from 'unocss/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), UnoCss({})]
};

export default config;
