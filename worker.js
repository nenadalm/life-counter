const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.EE6BC0B7306C76DD215BD47A90B2005E.js","css/styles.css?v=9e19bd93a962bf6536dd8278190bfd72978658ef"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

