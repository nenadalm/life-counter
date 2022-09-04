const urlsToCache = ["?a80f45c921be7fc0124ca215e4f441b1692b18d2","index.html?v=a80f45c921be7fc0124ca215e4f441b1692b18d2","js/app.js?v=5d432ae665cb870ae9fa41fceda65991c0a25dec","css/styles.css?v=2020f470d71a74cb50b85d8525b9acf6c23e97c7","img/icon.svg?v=caca79da26faa19b77090e4fa0e18e3a86dcc89f"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

