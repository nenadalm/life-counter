const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=c5783eeba8c5fd2a3d0df55ceaa5b60cd71911fe","css/styles.css?v=b74ddd2477b36adf4139e3091d4962415689d466"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

