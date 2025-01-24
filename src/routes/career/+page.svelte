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

    <div class="flex justify-end my-[4rem] px-4">
        <div class="w-full h-full flex flex-col gap-[4rem] max-w-[1200px]">
            <h3 class="
                text-[24px]
                lg:text-[32px]
                xl:text-[40px]
                max-w-[70%] font-medium
                ">
                Join a community of design and technology leaders
            </h3>

            <div class="flex flex-col gap-6">
                <p class="
                    font-medium
                    text-[14px]
                    lg:text-[16px]
                    xl:text-[20px]
                    ">
                    [ INTERESTED IN OPPORTUNITIES? ]
                </p>

                <p class="
                    font-medium
                    text-[14px]
                    lg:text-[16px]
                    xl:text-[20px]
                    max-w-[500px]
                    ">
                    Learn more about what brings us together and motivates us on a daily basis, the recruitment process and your future teammates.
                </p>

                <p class="
                    font-medium
                    text-[14px]
                    lg:text-[16px]
                    xl:text-[20px]
                    max-w-[500px]
                    ">
                    We are always looking for experienced and talented people to join our team.
                </p>

                <p class="
                    mt-[4rem]
                    font-medium
                    text-[14px]
                    lg:text-[16px]
                    xl:text-[20px]
                    ">
                    [ CAREERS ]
                </p>
            </div>

            <div class="flex flex-col font-medium">
                <div class="flex items-center justify-between py-10">
                    <div class="flex flex-col lg:flex-row items-center gap-6 justify-between">
                        <p class="text-[18px] lg:text-[20px] xl:text-[24px] text-red-500">
                            01
                        </p>
                        <h1 class="
                            font-medium inter
                            text-[22px] leading-[22px]
                            md:text-[40px] md:leading-[40px]
                            lg:text-[45px] lg:leading-[45px]
                            xl:text-[55px] xl:leading-[55px]
                            ">
                            Lead Designer
                        </h1>
                    </div>
                    <h1 class="
                        font-medium inter
                        text-[18px] leading-[18px]
                        lg:text-[20px] lg:leading-[20px]
                        xl:text-[24px] xl:leading-[24px]
                        ">
                        Remote first & Paris — Permanent contract
                    </h1>
                </div>

                <div class="border-[#2d2d2d] border-t flex items-center justify-between py-10">
                    <div class="flex flex-col lg:flex-row items-center gap-6 justify-between">
                        <p class="text-[18px] lg:text-[20px] xl:text-[24px] text-red-500">
                            02
                        </p>
                        <h1 class="
                            font-medium inter
                            text-[22px] leading-[22px]
                            md:text-[40px] md:leading-[40px]
                            lg:text-[45px] lg:leading-[45px]
                            xl:text-[55px] xl:leading-[55px]
                            ">
                            Freelance Developer
                        </h1>
                    </div>
                    <h1 class="
                        font-medium inter
                        text-[18px] leading-[18px]
                        lg:text-[20px] lg:leading-[20px]
                        xl:text-[24px] xl:leading-[24px]
                        ">
                        Remote first & Paris — Freelance
                    </h1>
                </div>

                <div class="border-[#2d2d2d] border-t flex items-center justify-between py-10">
                    <div class="flex flex-col lg:flex-row items-center gap-6 justify-between">
                        <p class="text-[18px] lg:text-[20px] xl:text-[24px] text-red-500">
                            03
                        </p>
                        <h1 class="
                            font-medium inter
                            text-[22px] leading-[22px]
                            md:text-[40px] md:leading-[40px]
                            lg:text-[45px] lg:leading-[45px]
                            xl:text-[55px] xl:leading-[55px]
                            ">
                            Business Analyst
                        </h1>
                    </div>
                    <h1 class="
                        font-medium inter
                        text-[18px] leading-[18px]
                        lg:text-[20px] lg:leading-[20px]
                        xl:text-[24px] xl:leading-[24px]
                        ">
                        Permanent contract
                    </h1>
                </div>

                <div class="border-[#2d2d2d] border-t flex items-center justify-between py-10">
                    <div class="flex flex-col lg:flex-row items-center gap-6 justify-between">
                        <p class="text-[18px] lg:text-[20px] xl:text-[24px] text-red-500">
                            04
                        </p>
                        <h1 class="
                            font-medium inter
                            text-[22px] leading-[22px]
                            md:text-[40px] md:leading-[40px]
                            lg:text-[45px] lg:leading-[45px]
                            xl:text-[55px] xl:leading-[55px]
                            ">
                            UI / UX Designer
                        </h1>
                    </div>
                    <h1 class="
                        font-medium inter
                        text-[18px] leading-[18px]
                        lg:text-[20px] lg:leading-[20px]
                        xl:text-[24px] xl:leading-[24px]
                        ">
                        On-Site — Paris Studio
                    </h1>
                </div>

                <div class="border-[#2d2d2d] border-t flex items-center justify-between py-10">
                    <div class="flex flex-col lg:flex-row items-center gap-6 justify-between">
                        <p class="text-[18px] lg:text-[20px] xl:text-[24px] text-red-500">
                            05
                        </p>
                        <h1 class="
                            font-medium inter
                            text-[22px] leading-[22px]
                            md:text-[40px] md:leading-[40px]
                            lg:text-[45px] lg:leading-[45px]
                            xl:text-[55px] xl:leading-[55px]
                            ">
                            UI Designer
                        </h1>
                    </div>
                    <h1 class="
                        font-medium inter
                        text-[18px] leading-[18px]
                        lg:text-[20px] lg:leading-[20px]
                        xl:text-[24px] xl:leading-[24px]
                        ">
                        Remote first & Paris — Freelance
                    </h1>
                </div>
            </div>
        </div>
    </div>
</div>
