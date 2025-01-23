<script lang="ts">
import {
    onMount
} from "svelte";

export let text: string;
export let delay: number;

let visible = false;

onMount(() => {
    setTimeout(() => {
        visible = true;
    }, delay);
});
</script>

<span class="
    overflow-hidden inline-block
    h-[46px] md:h-[86px] lg:h-[108px] xl:h-[128px]
    ">
    <span
        class="
        inline-block
        text-[50px] leading-[50px]
        md:text-[90px] md:leading-[90px]
        lg:text-[108px] lg:leading-[108px]
        xl:text-[128px] xl:leading-[128px]
        font-extrabold text-center title duration-300
        transition-all
        {
            visible ? `translate-y-0 opacity-100` 
            : 
            `opacity-0 translate-y-[50px] md:translate-y-[90px] lg:translate-y-[108px] xl:translate-y-[128px]`
        }
        "
        >
        {text}
    </span>
</span>