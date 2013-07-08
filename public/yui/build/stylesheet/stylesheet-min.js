/*
YUI 3.10.3 (build 2fb5187)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("stylesheet",function(e,t){function v(t,r){var o,a,f,l={},h,p,m,g,y,b;if(!e.instanceOf(this,v))return new v(t,r);if(t){if(e.Node&&t instanceof e.Node)a=t._node;else if(t.nodeName)a=t;else if(s(t)){if(t&&u[t])return u[t];a=n.getElementById(t.replace(/^#/,d))}if(a&&u[e.stamp(a)])return u[e.stamp(a)]}if(!a||!/^(?:style|link)$/i.test(a.nodeName))a=n.createElement("style"),a.type="text/css";s(t)&&(t.indexOf("{")!=-1?a.styleSheet?a.styleSheet.cssText=t:a.appendChild(n.createTextNode(t)):r||(r=t));if(!a.parentNode||a.parentNode.nodeName.toLowerCase()!=="head")o=(a.ownerDocument||n).getElementsByTagName("head")[0],o.appendChild(a);f=a.sheet||a.styleSheet,h=f&&"cssRules"in f?"cssRules":"rules",m="deleteRule"in f?function(e){f.deleteRule(e)}:function(e){f.removeRule(e)},p="insertRule"in f?function(e,t,n){f.insertRule(e+" {"+t+"}",n)}:function(e,t,n){f.addRule(e,t,n)};for(g=f[h].length-1;g>=0;--g)y=f[h][g],b=y.selectorText,l[b]?(l[b].style.cssText+=";"+y.style.cssText,m(g)):l[b]=y;v.register(e.stamp(a),this),r&&v.register(r,this),e.mix(this,{getId:function(){return e.stamp(a)},enable:function(){return f.disabled=!1,this},disable:function(){return f.disabled=!0,this},isEnabled:function(){return!f.disabled},set:function(e,t){var n=l[e],r=e.split(/\s*,\s*/),i,s;if(r.length>1){for(i=r.length-1;i>=0;--i)this.set(r[i],t);return this}return v.isValidSelector(e)?(n?n.style.cssText=v.toCssText(t,n.style.cssText):(s=f[h].length,t=v.toCssText(t),t&&(p(e,t,s),l[e]=f[h][s])),this):this},unset:function(t,n){var r=l[t],s=t.split(/\s*,\s*/),o=!n,u,a;if(s.length>1){for(a=s.length-1;a>=0;--a)this.unset(s[a],n);return this}if(r){if(!o){n=e.Array(n),i.cssText=r.style.cssText;for(a=n.length-1;a>=0;--a)c(i,n[a]);i.cssText?r.style.cssText=i.cssText:o=!0}if(o){u=f[h];for(a=u.length-1;a>=0;--a)if(u[a]===r){delete l[t],m(a);break}}}return this},getCssText:function(e){var t,n,r;if(s(e))return t=l[e.split(/\s*,\s*/)[0]],t?t.style.cssText:null;n=[];for(r in l)l.hasOwnProperty(r)&&(t=l[r],n.push(t.selectorText+" {"+t.style.cssText+"}"));return n.join("\n")}})}var n=e.config.doc,r=n.createElement("p"),i=r.style,s=e.Lang.isString,o={},u={},a="cssFloat"in i?"cssFloat":"styleFloat",f,l,c,h="opacity",p="float",d="";l=h in i?function(e){e.opacity=d}:function(e){e.filter=d},i.border="1px solid red",i.border=d,c=i.borderLeft?function(e,t){var n;t!==a&&t.toLowerCase().indexOf(p)!=-1&&(t=a);if(s(e[t]))switch(t){case h:case"filter":l(e);break;case"font":e.font=e.fontStyle=e.fontVariant=e.fontWeight=e.fontSize=e.lineHeight=e.fontFamily=d;break;default:for(n in e)n.indexOf(t)===0&&(e[n]=d)}}:function(e,t){t!==a&&t.toLowerCase().indexOf(p)!=-1&&(t=a),s(e[t])&&(t===h?l(e):e[t]=d)},f=function(t,s){var o=t.styleFloat||t.cssFloat||t[p],u=e.Lang.trim,f;try{i.cssText=s||d}catch(l){r=n.createElement("p"),i=r.style,i.cssText=s||d}o&&!t[a]&&(t=e.merge(t),delete t.styleFloat,delete t.cssFloat,delete t[p],t[a]=o);for(f in t)if(t.hasOwnProperty(f))try{i[f]=u(t[f])}catch(c){}return i.cssText},e.mix(v,{toCssText:h in i?f:function(t,n){return h in t&&(t=e.merge(t,{filter:"alpha(opacity="+t.opacity*100+")"}),delete t.opacity),f(t,n)},register:function(e,t){return!!(e&&t instanceof v&&!u[e]&&(u[e]=t))},isValidSelector:function(e){var t=!1;return e&&s(e)&&(o.hasOwnProperty(e)||(o[e]=!/\S/.test(e.replace(/\s+|\s*[+~>]\s*/g," ").replace(/([^ ])\[.*?\]/g,"$1").replace(/([^ ])::?[a-z][a-z\-]+[a-z](?:\(.*?\))?/ig,"$1").replace(/(?:^| )[a-z0-6]+/ig," ").replace(/\\./g,d).replace(/[.#]\w[\w\-]*/g,d))),t=o[e]),t}},!0),e.StyleSheet=v},"3.10.3",{requires:["yui-base"]});
