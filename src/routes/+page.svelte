<script lang="ts">
    import './page.css';

    import MainLink from '$lib/link/main-link.svelte';
    import LargeLink from '$lib/link/large-link.svelte';
    import MenuInnerContent from '$lib/content/inner-menu.svelte';

    let menu = $state(false);
</script>

<div class="nav-menu z-50">
    <MainLink text="[ NOTHING STUDIO ]" />
    <button onclick={() => menu = !menu}>
        <MainLink text="[ {menu ? "CLOSE" : "MENU"} ]" />
    </button>
</div>

<div class={`menu-container z-10 ${menu ? 'open' : ''}`}>
    <MenuInnerContent />
</div>

<div class="pt-[130px] flex items-center justify-center">
    <div class="flex flex-col items-center gap-[1rem] md:gap-[3rem] md:items-end">
        <h3 class="head-text font-bold text-center">
            NOTHING <br />
            DESIGN STUDIO
        </h3>

        <p class="child-text text-[18px] text-center md:text-left">
            <span class="md:ml-[8ch]">We are a creative studio based in</span><br />
            Canada, We build solid brands that needs no<br />
            introduction at all.
        </p>
    </div>
</div>

<div class="flex items-center justify-between mt-[8rem] main-content-padding">
    <p class="main-hl">[ FEATURED PROJECTS ]</p>
    <MainLink text="[ HIRE ME ]" />
</div>
