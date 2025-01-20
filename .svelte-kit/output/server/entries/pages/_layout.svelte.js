import { d as bind_props, c as pop, p as push } from "../../chunks/index.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
function Nav_text($$payload, $$props) {
  let content = $$props["content"];
  $$payload.out += `<div class="overflow-y-hidden duration-300 cursor-pointer box-border w-full max-w-fit font-extrabold text-[#464646] hover:text-white h-[47px] text-[45px] leading-[45px] md:h-[74px] md:text-[72px] md:leading-[72px] xl:h-[110px] xl:text-[120px] xl:leading-[120px]"><div class="hover:translate-y-[-47px] md:hover:translate-y-[-74px] xl:hover:translate-y-[-122px] flex flex-col gap-1 duration-200"><p>${escape_html(content)}</p> <p>${escape_html(content)}</p></div></div>`;
  bind_props($$props, { content });
}
function Main_text($$payload, $$props) {
  let content = $$props["content"];
  $$payload.out += `<div class="overflow-y-hidden duration-300 cursor-pointer box-border w-full max-w-fit h-[16px] text-[14px] md:text-[24px] md:h-[26px]"><div class="leading-[14px] hover:translate-y-[-18px] md:hover:translate-y-[-28px] md:leading-[24px] flex flex-col gap-1 duration-200"><p>${escape_html(content)}</p> <p>${escape_html(content)}</p></div></div>`;
  bind_props($$props, { content });
}
function Header($$payload) {
  $$payload.out += `<div class="fixed top-0 left-0 w-full flex justify-between z-50 p-[10px] pt-[20px] sm:py-[20px] sm:px-[20px] xl:pt-[40px]"><a href="/">`;
  Main_text($$payload, { content: "[ NOTHING DESIGN ]" });
  $$payload.out += `<!----></a> <button>`;
  Main_text($$payload, {
    content: `[ ${"MENU"} ]`
  });
  $$payload.out += `<!----></button></div> <div id="menu"${attr("class", `
    overflow-hidden fixed w-full duration-300
    ${"h-0 top-[20px] opacity-50"}
    `)}><div class="h-[100dvh] bg-black flex flex-col"><div class="w-full h-full flex items-center justify-center"><div class="md:w-full"></div> <div class="flex flex-col w-full p-3 md:p-0"><a href="/">`;
  Nav_text($$payload, { content: "HOME" });
  $$payload.out += `<!----></a> <a href="/showcase">`;
  Nav_text($$payload, { content: "SHOWCASE" });
  $$payload.out += `<!----></a> <a href="/career">`;
  Nav_text($$payload, { content: "CAREER" });
  $$payload.out += `<!----></a> <a href="/about">`;
  Nav_text($$payload, { content: "ABOUT" });
  $$payload.out += `<!----></a> <a href="/contacts">`;
  Nav_text($$payload, { content: "CONTACTS" });
  $$payload.out += `<!----></a></div></div> <div class="flex flex-col md:flex-row gap-3 px-[20px] pb-[20px] md:items-center"><div class="flex flex-col gap-3">`;
  Main_text($$payload, { content: "HELLO@NOTHING.STUDIO" });
  $$payload.out += `<!----> `;
  Main_text($$payload, { content: "+44 12 34 56 78" });
  $$payload.out += `<!----></div> <div class="md:w-full"></div> `;
  Main_text($$payload, { content: "LINKEDIN" });
  $$payload.out += `<!----> `;
  Main_text($$payload, { content: "INSTAGRAM" });
  $$payload.out += `<!----></div></div></div>`;
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  Header($$payload);
  $$payload.out += `<!----> <div class="pt-[36px] md:pt-[46px] xl:pt-[66px] px-[10px] sm:px-[20px]">`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _layout as default
};
