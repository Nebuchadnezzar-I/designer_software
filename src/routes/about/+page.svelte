<script lang="ts">
import Title from "$lib/text/title.svelte";
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

<div class="
    pt-[80px] pb-[50px]
    md:pt-[100px] md:pb-[80px]
    lg:pt-[110px] lg:pb-[120px]
    xl:pt-[130px] xl:pb-[120px]
    ">

    <div
        id="curtain"
        class="
        absolute top-[0px] left-0
        w-full mix-blend-difference z-10
        bg-white duration-500 ease-in-out
        {curtainVisible ? 'h-[100dvh]' : 'h-0'}
        ">
    </div>

    <h1 class="text-center">
        <Title text={"ABOUT"} delay={800}></Title>
        <br />
        <Title text={"NOTHING"} delay={900}></Title>
    </h1>

    <div class="p-4">
        <img
            class="w-full rounded-3xl"
            alt=""
            src="https://framerusercontent.com/images/2UROuyS0Fm2VW1duGwNSLEgUzEg.png"
            />
    </div>
</div>
