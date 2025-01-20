<script lang="ts">
import {
    onMount
} from "svelte";
let curtainVisible = true;

onMount(() => {
    setTimeout(() => {
        curtainVisible = false;
    }, 400);
});
</script>

<div>
    <div
        id="curtain"
        class={`
        fixed z-[999] bg-white mix-blend-difference w-full top-0 left-0
        transition-[height] duration-300 ease-in-out
        ${curtainVisible ? 'h-full' : 'h-0'}
        `}>
    </div>

    <!-- Hero -->
    <div class="
        flex flex-col items-center
        font-extrabold

        mt-[4rem] mb-[4rem]
        text-[46px] leading-[46px]
        md:text-[86px] md:leading-[86px]
        lg:text-[110px] lg:leading-[110px]
        xl:text-[130px] xl:leading-[130px]
        ">
        <h1>ABOUT</h1>
        <h1>NOTHING</h1>
    </div>

    <img
        class="w-full h-full rounded-2xl"
        alt="img"
        src="https://framerusercontent.com/images/2UROuyS0Fm2VW1duGwNSLEgUzEg.png"
        />

</div>
