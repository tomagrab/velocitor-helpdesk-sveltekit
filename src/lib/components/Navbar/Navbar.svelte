<script lang="ts">
	export let toggleSidebar: () => void;
</script>

<nav class="flex h-16 w-full items-center justify-between bg-gray-800 p-3 text-white shadow-lg">
	<div class="text-lg font-semibold">My Website</div>
	<!-- Place for other navbar content like links or buttons -->
	<!-- The toggle button is now part of the Navbar component -->
	<button class="p-2 text-white md:hidden" on:click={toggleSidebar}>
		<!-- You can add an icon here for the toggle button -->
		Toggle
	</button>
</nav>
