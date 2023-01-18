const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=29b9177a6612a1d9c912917b86938ec837b27514","css/styles.css?v=ab774fab6a706ac10942c836bf1907eb8f95cc24"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

