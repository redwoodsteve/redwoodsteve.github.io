(function(){"use strict";const o={log:function(e){self.postMessage({type:1,thing:e})},info:function(e){self.postMessage({type:2,thing:e})},warn:function(e){self.postMessage({type:3,thing:e})},error:function(e){self.postMessage({type:4,thing:e})}};self.onerror=e=>(o.error(e),!0);function r(e){self.postMessage({type:"background",number:e})}function n(e){return new Promise(t=>{setTimeout(t,e*1e3)})}function s(){self.postMessage({type:"done"})}async function a(e){let t=!1;for(e.constructor.name==="AsyncFunction"&&(t=!0);;)t?await e():e(),await n(.05)}onmessage=e=>{if(e.data.code){const t=new Function("console","backdrop","wait","forever","stop",`
			(async () => {
			${e.data.code}
			stop();
			})();
		`);try{t(o,r,n,a,s)}catch(c){o.error(c),s()}}if(e.data.error)throw new Error(e.data.error)}})();
