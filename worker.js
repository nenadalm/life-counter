const relatedAppVersion = "4b65f9e40354f9bf5227e1462567daffb46f36ec";
const urlsToCache = ["index.html","manifest.json","img/icon.svg","js/app.2DC51E26C0D7572BF9847AFA7C1B614B.js","css/styles.ada170871e535fe3219ab9fb04d1e0fca6620e97.css"];

const cacheKeyPrefix = 'nenadalm.life-counter.';
const cacheKey = `${cacheKeyPrefix}resources.${relatedAppVersion}`;

function ensureHtmlVersionMatches(cache) {
    return cache.match(new Request('index.html'))
        .then(response => response.text())
        .then(html => html.match(/<meta name="app-version" content="(.*?)">/)[1])
        .then(version => {
            if (version !== relatedAppVersion) {
                return Promise.reject(`Incorrect index.html version ${version} doesn't match worker.js version ${relatedAppVersion}`);
            }
        })
}

self.addEventListener('install', event => {
    event.waitUntil(caches.open(cacheKey).then(
        cache => cache.addAll(urlsToCache)
            .then(() => ensureHtmlVersionMatches(cache))));
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => keys.filter(key => key.startsWith(cacheKeyPrefix)))
            .then(keys => keys.filter(key => key !== cacheKey))
            .then(oldKeys => Promise.all(oldKeys.map(key => caches.delete(key))))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open(cacheKey)
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});
