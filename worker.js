const relatedAppVersion = "d780f7a3738537870689789a61c9a2a6a96ddcec";
const urlsToCache = ["index.html","manifest.json","img/icon.svg","js/app.11DF19300B029C972DB42F00CCA4BF28.js","css/styles.9e19bd93a962bf6536dd8278190bfd72978658ef.css"];

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
