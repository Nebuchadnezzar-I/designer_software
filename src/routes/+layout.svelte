<script lang="ts">
	import Header from '$lib/components/header/header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Header />
<div class="
	pt-[36px]
	md:pt-[46px]
	xl:pt-[66px]

	px-[10px]
	sm:px-[20px]
">
	{@render children()}
</div>
