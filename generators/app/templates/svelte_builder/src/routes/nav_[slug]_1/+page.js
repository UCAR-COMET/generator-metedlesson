/** @type {import('./$types').EntryGenerator} */
import {module} from '$lib/lesson.config.js';

export function entries() {
	return [
		{ slug: module.metadata.id },
        // Ensure to include other entries if needed
	];
};

export const prerender = true;