<script lang="ts">
	import type { CommandEntry, } from 'src/types';
import Entry from './Entry.svelte';
	export let commandEntries: CommandEntry[];




</script>

<div>
	{#each commandEntries as entry}
		<div class="border-2 flex justify-between">
            <Entry commandEntry={entry}/>
		</div>
	{/each}
</div>
