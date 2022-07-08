<script lang="ts">
	import 'uno.css';

	import hotkeys from 'hotkeys-js';
	import { goto } from '$app/navigation';
	hotkeys('escape', function (_event, _handler) {
		console.log('hi');
		goto(`./`, { replaceState: false });
	});
</script>

<slot />
