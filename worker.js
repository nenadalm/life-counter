const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.2889DBE606416740956FE7A32C8349D4.js","css/styles.css?v=877019e3dfd74e960ff18bf3c091cbabf2a42f52"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

