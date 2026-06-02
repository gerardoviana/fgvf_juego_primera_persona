const CACHE_NAME = "videojuego-primera-persona-fgvf";

self.addEventListener('install',event=> {
    event.waitUntil((async()=>{
        const cache = await caches.open((CACHE_NAME));
        cache.addAll([
            './',
            './index.html',
            './js/script.js',
            './css/style.css'
        ]);
    }));
});

//SE CONSULTAN LOS ARCHIVOS CACHEADOS CUANDO ES NECESARIO (el navegador tomará la decisión)
self.addEventListener('fetch',(event) =>{
    event.respondWith((new Promise((resolve,reject)=>{
        fetch(event.request).then(resolve).catch(reject);
    })).catch(() => {}));
});