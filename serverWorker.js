// serviceWorker.js => in which we cache the assets

// staticGothic => name of cache
// assets => the assets to be stored in the cache
const staticGothic = "18th-century-gothic-site-v1"
const assets = [
  "/",
  "/index.html",
  "/artists.html",
  "/follies.html",
  "/css/style.css",
  "/js/app.js",
  "/images/walpoleHorace.JPG",
  "/images/reeveClara.JPG",
  "/images/sophia-lee.jpg",
  "/images/william-beckford.jpg",
  "/images/charlotte-turner-smith.jpg",
  "/images/ann-radcliffe.jpg"
]

// self => service worker
// "install" is the first of the service worker life cycles. Runs when a service worker is installed.
// When install event is fired, callback in run to give access to event object
self.addEventListener("install", installEvent => {
  // waitUntill() waits for "install" to finish since it is an asynchronous event.
  installEvent.waitUntil(
    // Once cache API is ready, open() is run and creates cache
    caches.open(staticGothic).then(cache => {
      // returns a promise that allows assets to be stored in the cache.
      cache.addAll(assets)
    })
  )
})