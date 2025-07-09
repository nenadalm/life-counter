const relatedAppVersion = "f542bb1580a251e3f7a3bbca4b76bdc4d040954f";
const urlsToCache = ["index.html","manifest.json","img/icon.svg","js/app.BFB83F676120C5850BE3068A31249B91.js","css/styles.3c11952f8de8fc64e3c6fbc842020e806094b187.css"];

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
