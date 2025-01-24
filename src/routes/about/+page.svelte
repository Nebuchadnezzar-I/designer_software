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

    <div class="flex justify-end my-[4rem] px-4">
        <div class="w-full h-full flex flex-col gap-[4rem] max-w-[1200px]">
            <h3 class="
                text-[24px]
                lg:text-[32px]
                xl:text-[40px]
                max-w-[70%] font-medium
                ">
                We are a digital agency from Canada. We are a small and dedicated team of skilled and passionate people.
            </h3>

            <p class="
                font-medium
                text-[14px]
                lg:text-[16px]
                xl:text-[20px]
                ">
                [ EXPERIENCED PEEPS ]
            </p>

            <div class="flex flex-col gap-6 font-medium
                ">
                <div class="border-[#2d2d2d] border-t">
                    <p class="
                        text-[18px] lg:text-[20px] xl:text-[24px] text-red-500
                        relative top-[10px] lg:top-[20px]
                        ">YEARS OF EXPERIENCE</p>
                    <h1 class="
                        font-extrabold inter
                        text-[128px] leading-[128px]
                        lg:text-[216px] lg:leading-[216px]
                        xl:text-[250px] xl:leading-[250px]
                        ">
                        17
                    </h1>
                </div>

                <div class="border-[#2d2d2d] border-t">
                    <p class="
                        text-[18px] lg:text-[20px] xl:text-[24px] text-red-500
                        relative top-[10px] lg:top-[20px]
                        ">TEAM MEMBERS</p>
                    <h1 class="
                        font-extrabold inter
                        text-[128px] leading-[128px]
                        lg:text-[216px] lg:leading-[216px]
                        xl:text-[250px] xl:leading-[250px]
                        ">
                        25
                    </h1>
                </div>
            </div>
            
            <p class="
                font-medium
                text-[14px]
                lg:text-[16px]
                xl:text-[20px]
                ">
                Where Creativity<br />meets the technology.
            </p>
        </div>
    </div>
</div>
