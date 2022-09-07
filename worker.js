const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=c4fdafea73daa095f3f22e4bb9be403633ab8971","css/styles.css?v=784f027ab0635eaa3174da358f1840e144119808"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

