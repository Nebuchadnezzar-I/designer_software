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

<div class="flex items-center justify-between mt-[3rem] md:mt-[8rem] main-content-padding">
    <p class="main-hl">[ FEATURED PROJECTS ]</p>
    <MainLink text="[ HIRE ME ]" />
</div>

<div class="
    main-content-padding grid gap-[20px] grid-cols-3
    mt-[3rem] md:mt-[3rem] bg-black mb-[100dvh] pb-[2rem]
">
    <div class="w-full h-[600px] overflow-hidden rounded-3xl">
        <img
            class="
            w-full h-full object-cover
            hover:scale-105 duration-300
            "
            src="https://framerusercontent.com/images/VjmK5k85pyzQst2qyaxmS147Q9c.png"
        />
    </div>

    <div class="w-full h-[600px] overflow-hidden rounded-3xl">
        <img
            class="
            w-full h-full object-cover
            hover:scale-105 duration-300
            "
            src="https://framerusercontent.com/images/N0z5lkGDtjLyY06sidjYyyi5wc.png"
        />
    </div>

    <div class="w-full h-[600px] overflow-hidden rounded-3xl">
        <img
            class="
            w-full h-full object-cover
            hover:scale-105 duration-300
            "
            src="https://framerusercontent.com/images/2Vh0ijefmO9vWEVb9nBlvZD9A.png"
        />
    </div>

    <div class="w-full h-[600px] overflow-hidden rounded-3xl">
        <img
            class="
            w-full h-full object-cover
            hover:scale-105 duration-300
            "
            src="https://framerusercontent.com/images/vENclyz0MfVmH9NEJUgPYr0TXt4.png"
        />
    </div>

    <div class="w-full h-[600px] overflow-hidden rounded-3xl">
        <img
            class="
            w-full h-full object-cover
            hover:scale-105 duration-300
            "
            src="https://framerusercontent.com/images/GiJIy9YAYQ1o7IVnmTsvkgW69s.png"
        />
    </div>

    <div class="w-full h-[600px] overflow-hidden rounded-3xl">
        <img
            class="
            w-full h-full object-cover
            hover:scale-105 duration-300
            "
            src="https://framerusercontent.com/images/2CKwwox9Qk3SIPYzfE2P0ZU4es.png"
        />
    </div>
</div>

<div class="
    w-full fixed bottom-0 left-0 z-[-1] main-content-padding
    bg-[#0d0d0d] h-[100dvh] flex flex-col
">
    <div class="w-full h-full"></div>
    <div class="text-center">
        <p class="text-[20vw] leading-[20vw] text-[#212121] font-extrabold">NOTHING</p>
    </div>
    <div class="flex items-center justify-between pb-3">
        <div class="flex gap-3">
            <MainLink text="PRIVACY POLICY" />
            <MainLink text="COOKIE POLICY" />
        </div>

        <div class="flex gap-3">
            <MainLink text="TWITTER" />
            <MainLink text="LINKEDIN" />
        </div>
    </div>
</div>
