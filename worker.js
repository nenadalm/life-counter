const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=b13fb971b5dacade2873d042d1bf710497691e20","css/styles.css?v=91825b87134c6d09d2f35fe334d53b855aad02e3"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

