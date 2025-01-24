<script lang="ts">
import Title from "$lib/text/title.svelte";
import ContentSpacer from "$lib/ui/content-spacer.svelte";
import Curain from "$lib/ui/curain.svelte";
import ImageHolder from "$lib/ui/image-holder.svelte";
import PaddingPage from "$lib/ui/padding-page.svelte";
import Content from "$lib/ui/pages/career/content.svelte";
import SubLine from "$lib/ui/sub-line.svelte";
import Welcome from "$lib/ui/welcome.svelte";
</script>

<PaddingPage>
    <Curain />

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

    <ImageHolder
        imgLink="https://framerusercontent.com/images/PBQLn1d0kYRVINNCtpW1ENJ6Gkw.png" />

    <ContentSpacer>
        <Welcome
            text="Join a community of design and technology leaders" />

        <div class="flex flex-col gap-8 font-medium">
            <SubLine text="[ INTERESTED IN OPPORTUNITIES? ]" />

            <p class="max-w-[500px]">
                <SubLine text="
                    Learn more about what brings us together and
                    motivates us on a daily basis, the recruitment process and your future teammates.
                    " />
                <br />
                <br />
                <SubLine text="
                    We are always looking for experienced and talented people to join our team.
                    " />
            </p>

            <SubLine text="[ CAREERS ]" />
        </div>

        <div class="flex flex-col font-medium">
            <Content />
        </div>

    </ContentSpacer>
</PaddingPage>
