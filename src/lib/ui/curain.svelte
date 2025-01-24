<script lang="ts">
import {
    onMount
} from "svelte";
let curtainVisible = true;

onMount(() => {
    setTimeout(() => {
        curtainVisible = false;
    }, 500);
});
</script>

<div
    id="curtain"
    class="
    fixed inset-0 left-0
    w-full mix-blend-difference z-10
    bg-white duration-500 ease-in-out
    {curtainVisible ? 'h-[100dvh]' : 'h-0'}
    ">
</div>
