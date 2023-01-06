const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=a347840d98ce677f71e4e5c9a723719e057098fa","css/styles.css?v=3293edd67390410870166fb6130057c408f4aab5"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

