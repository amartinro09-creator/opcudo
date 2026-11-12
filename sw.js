/* Service worker · OPCUDO · versión 39
   Para publicar una versión nueva: cambia el número de V y sube los archivos. */
const V='opciones-v39-2';
const CORE=["./", "./index.html", "./manifest.webmanifest", "./privacidad.html", "./aviso-legal.html", "./fonts/fonts.css", "./fonts/bricolage-latin.woff2", "./fonts/bricolage-latin-ext.woff2", "./fonts/inter-latin.woff2", "./fonts/inter-latin-ext.woff2", "./fonts/inter-greek.woff2", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/favicon.svg"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
 /* páginas: primero la red (para recibir las versiones nuevas) y, sin conexión, la copia guardada */
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r).then(m=>m||caches.match('./index.html'))));return}
 /* fuentes, iconos y estilos: primero la copia guardada */
 e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res})))});
