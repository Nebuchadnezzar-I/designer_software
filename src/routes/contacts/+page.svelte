<script lang="ts">
import Link from "$lib/text/link.svelte";
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

    <div class="flex flex-col items-center mb-[3rem]">
        <div class="flex flex-col sm:gap-4 sm:flex-row items-center">
            <Title text={"GOT A"} delay={800}></Title>
            <Title text={"PROJECT?"} delay={850}></Title>
        </div>
        <div class="flex flex-col sm:gap-4 sm:flex-row items-center">
            <Title text={"NOTLET’S"} delay={900}></Title>
            <Title text={"TALK!"} delay={950}></Title>
        </div>
    </div>

    <div class="px-4">
        <img
            class="w-full rounded-3xl"
            alt=""
            src="https://framerusercontent.com/images/b1Jwi971pDM5QEhMvwL22qKnE.png"
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
                At Nothing, We collaborate with ambitious startups and industry leaders to create the future.
            </h3>
            <p class="
                font-medium
                text-[14px]
                lg:text-[16px]
                xl:text-[20px]
                ">
                Reach out to us or follow us on<br />socials to stay in the loop
            </p>

            <div class="flex flex-col gap-6 font-medium
                text-[18px] lg:text-[20px] xl:text-[24px]
                ">

                <div class="grid grid-cols-2 border-[#2d2d2d] border-t py-[1rem] pr-[4rem]">
                    <p>Inquiries</p>
                    <div class="flex flex-col gap-3 text-[#777]">
                        <Link text="HELLO@NOTHING.STUDIO" />
                        <Link text="0900 000 000" />
                    </div>
                </div>

                <div class="grid grid-cols-2 border-[#2d2d2d] border-t py-[1rem] pr-[4rem]">
                    <p>Socials</p>
                    <div class="flex flex-col gap-3 text-[#777]">
                        <Link text="TWITTER" />
                        <Link text="LINKEDIN" />
                        <Link text="INSTAGRAM" />
                    </div>
                </div>

                <div class="grid grid-cols-2 border-[#2d2d2d] border-t py-[1rem] pr-[4rem]">
                    <p>Office</p>
                    <div class="flex flex-col gap-3 text-[#777] text-[20px]">
                        <p>
                            122 Shoreditch Square Toronto<br />N2 4SL Canada
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-2 border-[#2d2d2d] border-t py-[1rem] pr-[4rem]">
                    <p>Careers</p>
                    <div class="flex flex-col gap-3">
                        <p class="text-[#777] text-[20px]">
                            We're always on the lookout for talented people.<br />Unsolicited applications can be sent to
                        </p>
                        <Link text="HELLO@NOTHING.STUDIO" />
                    </div>
                </div>

            </div>
        </div>
    </div>

</div>