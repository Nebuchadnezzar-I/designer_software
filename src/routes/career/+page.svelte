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

    <div class="flex items-center flex-col">
        <div class="flex gap-4">
            <Title text={"WE"} delay={800}></Title>
            <Title text={"ARE"} delay={850}></Title>
        </div>
        <div class="flex gap-4">
            <Title text={"HIRING"} delay={900}></Title>
            <Title text={"HERE!"} delay={950}></Title>
        </div>
    </div>

    <div class="p-4">
        <img
            class="w-full rounded-3xl"
            alt=""
            src="https://framerusercontent.com/images/PBQLn1d0kYRVINNCtpW1ENJ6Gkw.png"
            />
    </div>
</div>
