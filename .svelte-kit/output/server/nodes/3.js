

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DHChkInL.js","_app/immutable/chunks/BI9XH4k8.js","_app/immutable/chunks/CN_fe3Sn.js","_app/immutable/chunks/GWPuJXCY.js"];
export const stylesheets = [];
export const fonts = [];
