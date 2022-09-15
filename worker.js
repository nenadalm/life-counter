const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=821082e4988d8987480425589a5c15ddb5220042","css/styles.css?v=bf295578007f1ed9b396ad92080f7cca85ac40e1"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

