const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=fe0295b050c46cf6bf8904d8961552fb1a0456b9","css/styles.css?v=91825b87134c6d09d2f35fe334d53b855aad02e3"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

