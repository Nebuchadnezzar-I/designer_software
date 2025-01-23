<script lang="ts">
import NavLink from '$lib/text/nav-link.svelte';
import Link from '../text/link.svelte';
let {
    expandLayout,
    collapseLayout
} = $props();

const MenuAction = {
    OPEN: "OPEN",
    CLOSE: "CLOSE",
    COLLAPSE: "COLLAPSE",
    RESET: "RESET"
}

let menuCollapsedState = $state < string > (MenuAction.RESET);
let menuState = $state < string > (MenuAction.CLOSE);

function animatePageTransition() {
    expandLayout();

    setTimeout(() => {
        menuCollapsedState = MenuAction.COLLAPSE;
        collapseLayout();
    }, 1);

    setTimeout(() => {
        menuState = MenuAction.CLOSE;
        menuCollapsedState = MenuAction.RESET;
    }, 500);
}

function toggleMenu() {
    if (menuState == MenuAction.CLOSE) {
        menuState = MenuAction.OPEN
    } else {
        menuState = MenuAction.CLOSE
    }
}
</script>

<div class="
    fixed top-0 left-0 w-full text-font
    flex justify-between pt-[20px] px-[10px]
    md:px-[20px] xl:pt-[40px] z-50
    ">
    <Link text="[ NOTHING STUDIO ]" />
    <button onclick={toggleMenu}>
        <Link text="[ {menuState == MenuAction.OPEN ? "CLOSE" : "MENU"} ]" />
    </button>
</div>

<div class="
    fixed w-full ease-in-out z-40
    {menuCollapsedState == MenuAction.COLLAPSE ? "duration-500 top-[-100dvh]" : "duration-500 top-0"}
    {menuState == MenuAction.OPEN ? 'h-[100dvh]' : 'h-0'}
    ">
    <div class="
        w-full overflow-hidden duration-500 z-40 ease-in-out
        {menuState == MenuAction.OPEN ? 'h-[100dvh] opacity-100 pt-0' : 'top-[20px] h-0 opacity-50 pt-[20px]'}
        ">

        <div class="h-[100dvh] bg-black flex flex-col">
            <!-- Main links -->
            <div class="w-full h-full flex items-center justify-center">
                <div class="md:w-full"></div>
                <div class="flex flex-col w-full p-3 md:p-0">
                    <a href="/" onclick={animatePageTransition}>
                        <NavLink text="HOME" />
                    </a>
                    <a href="/showcase" onclick={animatePageTransition}>
                        <NavLink text="SHOWCASE" />
                    </a>
                    <a href="/career" onclick={animatePageTransition}>
                        <NavLink text="CAREER" />
                    </a>
                    <a href="/about" onclick={animatePageTransition}>
                        <NavLink text="ABOUT" />
                    </a>
                    <a href="/contacts" onclick={animatePageTransition}>
                        <NavLink text="CONTACTS" />
                    </a>
                </div>
            </div>
            <!-- Footer -->
            <div class="flex flex-col md:flex-row gap-3 px-[20px] pb-[20px] md:items-center">
                <div class="flex flex-col gap-3">
                    <Link text="HELLO@NOTHING.STUDIO" />
                    <Link text="+44 12 34 56 78" />
                </div>
                <div class="md:w-full"></div>
                <Link text="LINKEDIN" />
                <Link text="INSTAGRAM" />
            </div>
        </div>
    </div>
</div>
