export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BaPS5CW0.js","app":"_app/immutable/entry/app.czNrXkQC.js","imports":["_app/immutable/entry/start.BaPS5CW0.js","_app/immutable/chunks/B0apVzZ0.js","_app/immutable/chunks/CN_fe3Sn.js","_app/immutable/chunks/BgB43sDa.js","_app/immutable/entry/app.czNrXkQC.js","_app/immutable/chunks/CN_fe3Sn.js","_app/immutable/chunks/DVve8REn.js","_app/immutable/chunks/BI9XH4k8.js","_app/immutable/chunks/B0CEbFft.js","_app/immutable/chunks/BgB43sDa.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/career",
				pattern: /^\/career\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contacts",
				pattern: /^\/contacts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/showcase",
				pattern: /^\/showcase\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
