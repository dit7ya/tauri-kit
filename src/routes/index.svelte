<script lang="ts">
  import GridView from '../lib/GridView.svelte'
    import type { CommandEntry } from "../type";
    const myCommandEntries: CommandEntry[] = [
        {
            command: "notify-send hello",
            description: "Notify hello",
            key: "n",
        },
        {
            route: "h",
            description: "Notify hello",
            key: "h",
        },
    ];
</script>

<div>
    <GridView commandEntries={myCommandEntries} />
</div>
