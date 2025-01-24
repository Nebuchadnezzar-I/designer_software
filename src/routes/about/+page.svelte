<script lang="ts">
import ContentSpacer from './../../lib/ui/content-spacer.svelte';
import Title from "$lib/text/title.svelte";
import Curain from "$lib/ui/curain.svelte";
import ImageHolder from "$lib/ui/image-holder.svelte";
import PaddingPage from "$lib/ui/padding-page.svelte";
import Welcome from '$lib/ui/welcome.svelte';
    import SubLine from '$lib/ui/sub-line.svelte';
    import Content from '$lib/ui/pages/about/content.svelte';
</script>

<PaddingPage>
    <Curain />

    <h1 class="text-center">
        <Title text={"ABOUT"} delay={800}></Title>
        <br />
        <Title text={"NOTHING"} delay={900}></Title>
    </h1>

    <ImageHolder
        imgLink="https://framerusercontent.com/images/2UROuyS0Fm2VW1duGwNSLEgUzEg.png" />

    <ContentSpacer>

        <Welcome text="
            We are a digital agency from Canada.
            We are a small and dedicated team of skilled and passionate people.
            " />

        <SubLine text="[ EXPERIENCED PEEPS ]" />

        <div class="flex flex-col gap-6 font-medium">
            <Content />
        </div>

        <p class="
            font-medium
            text-[14px]
            lg:text-[16px]
            xl:text-[20px]
            ">
            Where Creativity<br />meets the technology.
        </p>

    </ContentSpacer>
</PaddingPage>
