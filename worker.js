const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=c8a39322ab4f619bc34224d6f4a56d09819cab72","css/styles.css?v=7fac955391a61f6a431766f7bf0b4bc9ec2bc1f0"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

