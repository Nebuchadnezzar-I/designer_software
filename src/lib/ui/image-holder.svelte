<script lang="ts">
export let imgLink: string;
</script>

<div class="relative overflow-hidden p-4 mt-[2rem] md:mt-[4rem]">
    <img
        class="w-full rounded-3xl transform motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out group-hover:translate-y-2"
        alt=""
        src={imgLink}
        />
</div>
