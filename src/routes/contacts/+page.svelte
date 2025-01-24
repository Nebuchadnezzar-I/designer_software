<script lang="ts">
import Welcome from './../../lib/ui/welcome.svelte';
import Title from "$lib/text/title.svelte";
import ContentSpacer from "$lib/ui/content-spacer.svelte";
import Curain from "$lib/ui/curain.svelte";
import ImageHolder from "$lib/ui/image-holder.svelte";
import PaddingPage from "$lib/ui/padding-page.svelte";
import SubLine from '$lib/ui/sub-line.svelte';
import Content from '$lib/ui/pages/contacts/content.svelte';
</script>

<PaddingPage>
    <Curain />

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

    <ImageHolder
        imgLink="https://framerusercontent.com/images/b1Jwi971pDM5QEhMvwL22qKnE.png" />

    <ContentSpacer>
        <Welcome text="
            At Nothing, We collaborate with ambitious
            startups and industry leaders to create the future.
            " />

        <p>
            <SubLine text="Reach out to us or follow us on" />
            <br />
            <SubLine text="socials to stay in the loop" />
        </p>

        <div class="flex flex-col gap-6 font-medium text-[18px] lg:text-[20px] xl:text-[24px]">
            <Content />
        </div>

        
    </ContentSpacer>
</PaddingPage>
