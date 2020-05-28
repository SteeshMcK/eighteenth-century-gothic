// serviceWorker.js => in which we cache the assets

// staticGothic => name of cache
// assets => the assets to be stored in the cache
const staticGothic = "18th-century-gothic-site-v1"
const assets = [
  "/projects2020/PWA/eighteenth-century-gothic/",
  "/projects2020/PWA/eighteenth-century-gothic/index.html",
  "/projects2020/PWA/eighteenth-century-gothic/artists.html",
  "/projects2020/PWA/eighteenth-century-gothic/follies.html",
  "/projects2020/PWA/eighteenth-century-gothic/css/style.css",
  "/projects2020/PWA/eighteenth-century-gothic/js/app.js",
  "/projects2020/PWA/eighteenth-century-gothic/images/walpoleHorace.JPG",
  "/projects2020/PWA/eighteenth-century-gothic/images/reeveClara.JPG",
  "/projects2020/PWA/eighteenth-century-gothic/images/sophia-lee.jpg",
  "/projects2020/PWA/eighteenth-century-gothic/images/william-beckford.jpg",
  "/projects2020/PWA/eighteenth-century-gothic/images/charlotte-turner-smith.jpg",
  "/projects2020/PWA/eighteenth-century-gothic/images/ann-radcliffe.jpg"
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

// "Fetch" the assets
self.addEventListener("fetch", fetchEvent => {
  // respondWith() prevents the browser's default response
  fetchEvent.respondWith(
    // match() checks if something in the cache matches fetchEvent.request (a.k.a. our array of)
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
// Assets can now be cached and fetched by the service worker.