const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=710123a2286380d61d7512d4fef1abc39a3ade93","css/styles.css?v=f3a3a5786d1b6d1bf0f99176da27d80994aeefea"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

