<script lang="ts">
	import { AreaChart } from 'lucide-svelte';
	import type { Writable } from 'svelte/store';

	export let showSidebar: Writable<boolean>;
</script>

<aside
	class={`transform ${$showSidebar ? 'w-24' : 'w-0'} ${'md:w-24'} overflow-hidden bg-slate-800 transition-all duration-300 ease-out`}
>
	<div class="flex h-16 items-center justify-center bg-velblue">
		<img src="https://vtrack.velsol.com/Content/images/VTrack-Logo-Small.png" alt="V" />
	</div>

	<div>
		<AreaChart size={24} />
	</div>
</aside>
