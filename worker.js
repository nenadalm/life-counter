const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=57645c6ef486fb522687b51e7f2efd1d248a9f10","css/styles.css?v=6d5a82495b8b151e392115d970195ade9b7f7f08"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

