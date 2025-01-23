<script lang="ts">
export let text: string;
</script>

<div class="
    overflow-y-hidden duration-300 cursor-pointer box-border
    w-full max-w-fit font-extrabold text-[#464646] hover:text-white

    h-[47px]
    text-[45px]
    leading-[45px]

    md:h-[74px]
    md:text-[72px]
    md:leading-[72px]

    xl:h-[110px]
    xl:text-[120px]
    xl:leading-[120px]
    ">
    <div class="
        hover:translate-y-[-47px]
        md:hover:translate-y-[-74px]
        xl:hover:translate-y-[-122px]

        flex flex-col gap-1 duration-200
        ">
        <p>{text}</p>
        <p>{text}</p>
    </div>
</div>
