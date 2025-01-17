import { d as bind_props, e as stringify } from "../../chunks/index.js";
import { f as fallback } from "../../chunks/utils.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Main_link($$payload, $$props) {
  let text = fallback($$props["text"], "");
  $$payload.out += `<div class="hover-link main-hl"><div class="inner main-in"><p>${escape_html(text)}</p> <p>${escape_html(text)}</p></div></div>`;
  bind_props($$props, { text });
}
function Large_link($$payload, $$props) {
  let text = fallback($$props["text"], "");
  $$payload.out += `<div class="hover-link large-hl"><div class="inner large-in"><p>${escape_html(text)}</p> <p>${escape_html(text)}</p></div></div>`;
  bind_props($$props, { text });
}
function Inner_menu($$payload) {
  $$payload.out += `<div class="h-[100dvh] flex flex-col"><div class="flex w-full h-full"><div class="w-full h-full hidden md:block"></div> <div class="w-full h-full flex flex-col justify-center p-5 md:p-0">`;
  Large_link($$payload, { text: "HOME" });
  $$payload.out += `<!----> `;
  Large_link($$payload, { text: "SHOWCASE" });
  $$payload.out += `<!----> `;
  Large_link($$payload, { text: "CAREER" });
  $$payload.out += `<!----> `;
  Large_link($$payload, { text: "ABOUT" });
  $$payload.out += `<!----> `;
  Large_link($$payload, { text: "CONTACTS" });
  $$payload.out += `<!----></div></div> <div class="flex items-center gap-3 justify-between p-[20px]"><div class="flex gap-5">`;
  Main_link($$payload, { text: "hello@nothing.com" });
  $$payload.out += `<!----> `;
  Main_link($$payload, { text: "+421 940 000 000" });
  $$payload.out += `<!----></div> <div class="flex gap-5">`;
  Main_link($$payload, { text: "LINKEDIN" });
  $$payload.out += `<!----> `;
  Main_link($$payload, { text: "INSTAGRAM" });
  $$payload.out += `<!----></div></div></div>`;
}
function _page($$payload) {
  $$payload.out += `<div class="nav-menu z-50">`;
  Main_link($$payload, { text: "[ NOTHING STUDIO ]" });
  $$payload.out += `<!----> <button>`;
  Main_link($$payload, {
    text: `[ ${stringify("MENU")} ]`
  });
  $$payload.out += `<!----></button></div> <div${attr("class", `menu-container z-10 ${""}`)}>`;
  Inner_menu($$payload);
  $$payload.out += `<!----></div> <div class="pt-[130px] flex items-center justify-center"><div class="flex flex-col items-center gap-[1rem] md:gap-[3rem] md:items-end"><h3 class="head-text font-bold text-center">NOTHING <br> DESIGN STUDIO</h3> <p class="child-text text-[18px] text-center md:text-left"><span class="md:ml-[8ch]">We are a creative studio based in</span><br> Canada, We build solid brands that needs no<br> introduction at all.</p></div></div> <div class="flex items-center justify-between mt-[8rem] main-content-padding"><p class="main-hl">[ FEATURED PROJECTS ]</p> `;
  Main_link($$payload, { text: "[ HIRE ME ]" });
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
