const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=74c45efe39a3f1b7f82ae48c92d184c58b2604f7","css/styles.css?v=c5edd7e9d345922e575772069ce2f29d28834b4f"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

