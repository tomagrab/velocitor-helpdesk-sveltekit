<script lang="ts">
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar/Sidebar.svelte';
	import '../app.scss';

	// This store will manage the sidebar visibility
	const showSidebar = writable(false);

	if (browser) {
		// Set the initial value based on the window width
		showSidebar.set(window.innerWidth >= 768);

		// Update the store on window resize
		window.addEventListener('resize', () => {
			showSidebar.set(window.innerWidth >= 768);
		});
	}

	function toggleSidebar() {
		showSidebar.update((value) => !value);
	}
</script>

<div class="flex min-h-screen">
	<Sidebar {showSidebar} />
	<div class="flex w-full flex-col">
		<Navbar {toggleSidebar} />
		<div class="flex flex-1 bg-slate-200 p-4">
			<div class="max-h-[calc(100vh-6rem)] flex-1 overflow-auto rounded bg-white p-2">
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	aside {
		/* Full viewport height, minus the height of the navbar if it's horizontal */
		height: 100vh;
	}
	.navbar-container {
		/* This container wraps the navbar to take the remaining width */
		flex-grow: 1;
	}
</style>
