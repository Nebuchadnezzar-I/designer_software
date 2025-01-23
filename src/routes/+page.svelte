<script lang="ts">
import Title from "$lib/text/title.svelte";

let titles = ["NOTHING", "DESIGN", "STUDIO"];
</script>

<div class="
    pt-[80px] pb-[50px]
    md:pt-[100px] md:pb-[80px]
    lg:pt-[110px] lg:pb-[120px]
    xl:pt-[130px] xl:pb-[120px]
    ">
    <h1 class="text-center">
        <span class="mr-6">
            <Title text={titles[0]} delay={500}></Title>
        </span>
        <Title text={titles[1]} delay={600}></Title>
        <br />
        <Title text={titles[2]} delay={700}></Title>
    </h1>
</div>