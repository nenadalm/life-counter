const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=e363c6d508735a969eafcaf8fb3b358eea0dd351","css/styles.css?v=3321c92513d7048da366327c934c6351ac7a15d9"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

