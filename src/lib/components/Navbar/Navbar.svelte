<script lang="ts">
	import { ChevronsRight } from 'lucide-svelte';
	import type { Writable } from 'svelte/store';

	export let toggleSidebar: () => void;
	export let showSidebar: Writable<boolean>;
</script>

<nav class="flex h-16 w-full items-center justify-between bg-white px-4 shadow-lg">
	<div class="w-1/2 justify-start">
		<button class="md:hidden" on:click={toggleSidebar}>
			<ChevronsRight
				class={`${$showSidebar ? '-rotate-180' : 'rotate-0'} text-velgray transition-transform duration-300`}
				size={24}
			/>
		</button>
	</div>
	<div class="shrink-0">
		<header>
			<h1 class="text-2xl font-bold text-velblue">Veloci-Points</h1>
		</header>
	</div>
	<div class="w-1/2 justify-end"></div>
</nav>
