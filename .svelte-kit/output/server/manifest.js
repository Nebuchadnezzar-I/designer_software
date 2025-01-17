export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/NHaasGroteskDSPro-15UltTh.woff2","fonts/NHaasGroteskDSPro-25Th.woff2","fonts/NHaasGroteskDSPro-55Rg.woff2","fonts/NHaasGroteskTXPro-55Rg.woff2","fonts/NHaasGroteskTXPro-65Md.woff2","fonts/NHaasGroteskTXPro-75Bd.woff2"]),
	mimeTypes: {".png":"image/png",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.BMU_C7hD.js","app":"_app/immutable/entry/app.DOzO2i29.js","imports":["_app/immutable/entry/start.BMU_C7hD.js","_app/immutable/chunks/entry.D2IvIur6.js","_app/immutable/chunks/runtime.B8TBBTnv.js","_app/immutable/chunks/index-client.3ucEkzPD.js","_app/immutable/entry/app.DOzO2i29.js","_app/immutable/chunks/runtime.B8TBBTnv.js","_app/immutable/chunks/render.BQ-yj2TF.js","_app/immutable/chunks/disclose-version.BJVzat8V.js","_app/immutable/chunks/props.7IB-qScA.js","_app/immutable/chunks/index-client.3ucEkzPD.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
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
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
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
