const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.7C040D89C8D45CD847E83929BE3F9348.js","css/styles.9e19bd93a962bf6536dd8278190bfd72978658ef.css"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});
