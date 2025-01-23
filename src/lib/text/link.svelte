<script lang="ts">
export let text: string;
</script>

<div class="
    flex flex-col overflow-hidden cursor-pointer
    h-[14px] lg:h-[16px] xl:h-[20px]
    ">

    <div class="
        duration-200 flex flex-col gap-[4px]
        text-[14px] leading-[14px] hover:translate-y-[-18px]
        lg:text-[16px] lg:leading-[16px] lg:hover:translate-y-[-20px]
        xl:text-[20px] xl:leading-[20px] xl:hover:translate-y-[-24px]
        ">
        <p>{text}</p>
        <p>{text}</p>
    </div>
</div>
