const urlsToCache = ["?0c8aaf92196ca61d2445f5752c05ac7c4e7bb2e9","index.html?v=0c8aaf92196ca61d2445f5752c05ac7c4e7bb2e9","js/app.js?v=5d432ae665cb870ae9fa41fceda65991c0a25dec","css/styles.css?v=180decbc8ccf38863bcc060a02c65e46c4de2ce2","img/icon.svg?v=caca79da26faa19b77090e4fa0e18e3a86dcc89f"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

