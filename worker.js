const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=dfec3d59d6cc1614149624ab324ef18f1cd0ba84","css/styles.css?v=a64179f6785feb20dffe75698bd69bdfdb744a2c"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

