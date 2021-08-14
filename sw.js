const nameVersion = "photos-v1";
const files = [
  "/",
  "index.html",
  "gallery.html",
  "about.html",
  "css/main.css",
  "js/app.js",
  "js/selectors.js",
  "js/install-sw.js",
  "js/classes/UserInterface.js",
  "img/webp/Afternoon.webp",
  "img/webp/Blue-Sky.webp",
  "img/webp/Building-Armenia.webp",
  "img/webp/Center-Parck-Pereira.webp",
  "img/webp/Church-Armenia.webp",
  "img/webp/Church-Barbosa.webp",
  "img/webp/Church-Quimbaya.webp",
  "img/webp/Fern.webp",
  "img/webp/Fish.webp",
  "img/webp/Flower-Five.webp",
  "img/webp/Park-Of-Coffee.webp",
  "data.json",
];

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== nameVersion)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// Basic service worker...
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(nameVersion).then((cache) => {
      return cache.match(event.request).then((response) => {
        const fetchPromise = fetch(event.request).then(
          (networkResponse) => {
            // If we got a response from the cache, update the cache...
            if (networkResponse) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          },
          (event) => {
            // Rejected promise - just ignore it, we're offline...
            event.waitUntil(
              // Our 'cache' here is named *cache* in the caches.open()...
              caches.open("cache").then((cache) => {
                return cache.addAll(files);
              })
            );
          }
        );
        // Respond from the cache, or the network...
        return response || fetchPromise;
      });
    })
  );
});

// Always updating i.e latest version available...
self.addEventListener("install", (event) => {
  self.skipWaiting();
  console.log("Latest version installed!");
});
