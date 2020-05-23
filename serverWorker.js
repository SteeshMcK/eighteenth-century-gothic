const staticGothic = "18th-century-gothic-site-v1"
const assets = [
  "/",
  "/index.html",
  "/artists.html",
  "/follies.html",
  "/css/style.css",
  "/js/app.js",
  "/images/walpoleHorace.JPG",
  "/images/clara-reeve.jpg",
  "/images/sophia-lee.jpg",
  "/images/william-beckford.jpg",
  "/images/charlotte-turner-smith.jpg",
  "/images/ann-radcliffe.jpg"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticGothic).then(cache => {
      cache.addAll(assets)
    })
  )
})