<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let showSidebar: Writable<boolean>;
</script>

<aside
	class={`transform ${$showSidebar ? 'w-24' : 'w-0'} ${'md:w-24'} overflow-hidden bg-gray-800 text-white transition-all duration-300 ease-in-out`}
>
	<!-- Sidebar content goes here -->
	Filler content
</aside>
