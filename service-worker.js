"use strict";var precacheConfig=[["/caldera-forms-docs-search/index.html","bbcbd46028b9843ec384c7affd9be34b"],["/caldera-forms-docs-search/static/css/main.82662e4a.css","7e8a1c33a8021204c129772a340f576f"],["/caldera-forms-docs-search/static/js/main.df54389b.js","4889bcf7db1c16f9d3f3c781dc8230b3"],["/caldera-forms-docs-search/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/caldera-forms-docs-search/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/caldera-forms-docs-search/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/caldera-forms-docs-search/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/caldera-forms-docs-search/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/caldera-forms-docs-search/static/media/logo.83748054.svg","837480547bf207c60ea2e669c41020c0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,r){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=r),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(r){return new Response(r,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,r,t,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(r)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,r){if(0===e.length)return!0;var t=new URL(r).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return r.every(function(r){return!r.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var r=e[0],t=e[1],a=new URL(r,self.location),n=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(r){if(!r.ok)throw new Error("Request for "+t+" returned a response with status "+r.status);return cleanResponse(r).then(function(r){return e.put(t,r)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!r.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var r,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(r=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),r=urlsToCacheKeys.has(t));var n="/caldera-forms-docs-search/index.html";!r&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),r=urlsToCacheKeys.has(t)),r&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(r){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,r),fetch(e.request)}))}});