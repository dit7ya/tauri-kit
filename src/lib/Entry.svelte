<script lang="ts">
	import type { CommandEntry } from '../type';
	import hotkeys from 'hotkeys-js';
	import { Command } from '@tauri-apps/api/shell';
	import { goto } from '$app/navigation';

	export let commandEntry: CommandEntry;

	hotkeys(commandEntry.key, function (event, handler) {
		if (commandEntry.command) {
			let c = new Command(commandEntry.command);
			c.execute();
		} else {
			// console.log(commandEntry);
			goto(`./${commandEntry.route}`, { replaceState: false });
		}
	});
</script>

<div>
	<div class="border-2 flex justify-between">
		<div />
		{commandEntry.key}
		{commandEntry.description}
		<div />
	</div>
</div>
