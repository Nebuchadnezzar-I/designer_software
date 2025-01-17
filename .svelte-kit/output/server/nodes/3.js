

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CXLkL6gV.js","_app/immutable/chunks/disclose-version.BJVzat8V.js","_app/immutable/chunks/runtime.B8TBBTnv.js","_app/immutable/chunks/legacy.rR6E-UqU.js"];
export const stylesheets = [];
export const fonts = [];
