<script>
import Link from "$lib/text/link.svelte";
</script>

<div class="grid grid-cols-2 border-[#2d2d2d] border-t py-[1rem] pr-[4rem]">
    <p>Inquiries</p>
    <div class="flex flex-col gap-3 text-[#777]">
        <Link text="HELLO@NOTHING.STUDIO" />
        <Link text="0900 000 000" />
    </div>
</div>

<div class="grid grid-cols-2 border-[#2d2d2d] border-t py-[1rem] pr-[4rem]">
    <p>Socials</p>
    <div class="flex flex-col gap-3 text-[#777]">
        <Link text="TWITTER" />
        <Link text="LINKEDIN" />
        <Link text="INSTAGRAM" />
    </div>
</div>

<div class="grid grid-cols-2 border-[#2d2d2d] border-t py-[1rem] pr-[4rem]">
    <p>Office</p>
    <div class="flex flex-col gap-3 text-[#777] text-[20px]">
        <p>
            122 Shoreditch Square Toronto<br />N2 4SL Canada
        </p>
    </div>
</div>

<div class="grid grid-cols-2 border-[#2d2d2d] border-t py-[1rem] pr-[4rem]">
    <p>Careers</p>
    <div class="flex flex-col gap-3">
        <p class="text-[#777] text-[20px]">
            We're always on the lookout for talented people.<br />Unsolicited applications can be sent to
        </p>
        <Link text="HELLO@NOTHING.STUDIO" />
    </div>
</div>
