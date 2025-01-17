

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BKAg_JY4.js","_app/immutable/chunks/disclose-version.BJVzat8V.js","_app/immutable/chunks/runtime.B8TBBTnv.js"];
export const stylesheets = ["_app/immutable/assets/0.BL8kf9As.css"];
export const fonts = [];
