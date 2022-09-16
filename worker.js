const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=45311724fab19fd635714267bcdc09622b36613b","css/styles.css?v=092b87e273b8d12f5fc7519ddabc0432f1fb9919"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

