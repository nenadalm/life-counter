const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=25b62bc2e69c692c6ccc0f83ac10cb7e0782bcd5","css/styles.css?v=3293edd67390410870166fb6130057c408f4aab5"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

