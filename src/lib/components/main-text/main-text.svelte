<script lang="ts">
export let content: string;
</script>

<div class="
    overflow-y-hidden duration-300 cursor-pointer box-border
    w-full max-w-fit

    h-[16px]
    text-[14px]
    md:text-[24px]
    md:h-[26px]
    ">
    <div class="
        leading-[14px]
        hover:translate-y-[-18px]
        md:hover:translate-y-[-28px]
        md:leading-[24px]

        flex flex-col gap-1 duration-200
        ">
        <p>{content}</p>
        <p>{content}</p>
    </div>
</div>
