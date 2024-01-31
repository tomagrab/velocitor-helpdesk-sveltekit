<script lang="ts">
	import { Skull, ChevronsRight } from 'lucide-svelte';
	import type { Writable } from 'svelte/store';

	export let toggleSidebar: () => void;
	export let showSidebar: Writable<boolean>;
</script>

<nav class="flex h-16 w-full items-center justify-between bg-gray-800 p-3 text-white shadow-lg">
	<button class="p-2 text-white md:hidden" on:click={toggleSidebar}>
		<ChevronsRight
			class={`${$showSidebar ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
			size={24}
		/>
	</button>
	<div class="text-lg font-semibold">My Website</div>
</nav>
