<script lang="ts">
import NavText from './../main-text/nav-text.svelte';
import MainText from "../main-text/main-text.svelte";
let isMenuOpen = $state(false);

function InstantClose() {
    const menu = document.getElementById("menu")!;
    menu.classList.add("hidden");

    setTimeout(() => {
        menu.classList.add("remove");
        isMenuOpen = false;
    }, 300);
}
</script>

<div class="
    fixed top-0 left-0 w-full flex justify-between z-50
    p-[10px] pt-[20px]
    sm:py-[20px] sm:px-[20px]
    xl:pt-[40px]
    ">

    <a href="/"><MainText content="[ NOTHING DESIGN ]" /></a>
    <button onclick={() => isMenuOpen = !isMenuOpen}>
        <MainText content={`[ ${ !isMenuOpen ? "MENU" : "CLOSE" } ]`} />
    </button>
</div>

<div id="menu" class={`
    overflow-hidden fixed w-full duration-300
    ${isMenuOpen ? "h-[100dvh] top-0 opacity-100" : "h-0 top-[20px] opacity-50"}
    `}>

    <div class="h-[100dvh] bg-black flex flex-col">
        <!-- Main links -->
        <div class="w-full h-full flex items-center justify-center">
            <div class="md:w-full"></div>
            <div class="flex flex-col w-full p-3 md:p-0">
                <a href="/" onclick={InstantClose}>
                    <NavText content="HOME" />
                </a>
                <a href="/showcase" onclick={InstantClose}>
                    <NavText content="SHOWCASE" />
                </a>
                <a href="/career" onclick={InstantClose}>
                    <NavText content="CAREER" />
                </a>
                <a href="/about" onclick={InstantClose}>
                    <NavText content="ABOUT" />
                </a>
                <a href="/contacts" onclick={InstantClose}>
                    <NavText content="CONTACTS" />
                </a>
            </div>
        </div>
        <!-- Footer -->
        <div class="flex flex-col md:flex-row gap-3 px-[20px] pb-[20px] md:items-center">
            <div class="flex flex-col gap-3">
                <MainText content="HELLO@NOTHING.STUDIO" />
                <MainText content="+44 12 34 56 78" />
            </div>
            <div class="md:w-full"></div>
            <MainText content="LINKEDIN" />
            <MainText content="INSTAGRAM" />
        </div>
    </div>
</div>