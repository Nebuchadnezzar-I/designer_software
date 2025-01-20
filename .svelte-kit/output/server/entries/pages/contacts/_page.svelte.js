import { a as attr } from "../../../chunks/attributes.js";
import { c as pop, p as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div><div id="curtain"${attr("class", `
        fixed z-[999] bg-white mix-blend-difference w-full top-0 left-0
        transition-[height] duration-300 ease-in-out
        ${"h-full"}
        `)}></div> <div class="flex flex-col items-center text-[130px] leading-[130px] font-extrabold mt-[4rem] mb-[4rem]"><h1>GOT A PROJECT?</h1> <h1>LET’S TALK!</h1></div> <img class="w-full h-full rounded-2xl" alt="img" src="https://framerusercontent.com/images/b1Jwi971pDM5QEhMvwL22qKnE.png"></div>`;
  pop();
}
export {
  _page as default
};
