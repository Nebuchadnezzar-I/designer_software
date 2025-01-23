<script lang="ts">
import Header from '$lib/header/header.svelte';
import { writable } from 'svelte/store';

let { children } = $props();

let AppState = writable({
    isActive: false
});

function expandLayout() {
    AppState.update(state => ({ ...state, isActive: true }));
}

function collapseLayout() {
    AppState.update(state => ({ ...state, isActive: false }));
}

import '../app.css';
</script>

<div class="
    fixed left-0 w-full h-full overflow-auto scroll-smooth no-scrollbar
    {$AppState.isActive ? "top-[100dvh]" : "top-[0px] duration-500 ease-in-out"}
">
    <Header expandLayout={expandLayout} collapseLayout={collapseLayout} />
    {@render children()}
</div>
