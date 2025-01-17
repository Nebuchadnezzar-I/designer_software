<script lang="ts">
    import MainLink from '$lib/link/main-link.svelte';
    import LargeLink from '$lib/link/large-link.svelte';
</script>

<div class="h-[100dvh] flex flex-col">
    <!-- LINKS -->
    <div class="flex w-full h-full">
        <div class="w-full h-full hidden md:block"></div>
        <div class="w-full h-full flex flex-col justify-center p-5 md:p-0">
            <LargeLink text="HOME" />
            <LargeLink text="SHOWCASE" />
            <LargeLink text="CAREER" />
            <LargeLink text="ABOUT" />
            <LargeLink text="CONTACTS" />
        </div>
    </div>

    <!-- FOOTER -->
    <div class="flex items-center gap-3 justify-between p-[20px]">
        <div class="flex gap-5">
            <MainLink text="hello@nothing.com" />
            <MainLink text="+421 940 000 000" />
        </div>
        <div class="flex gap-5">
            <MainLink text="LINKEDIN" />
            <MainLink text="INSTAGRAM" />
        </div>
    </div>
</div>
