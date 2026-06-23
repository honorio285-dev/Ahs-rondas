// Service worker do A.H.S Rondas
// O app precisa de internet para funcionar (Firebase). Este SW serve só
// para o app poder ser instalado e atende as exigências do PWABuilder.
const CACHE = "ahs-rondas-v1";

self.addEventListener("install", function (e) {
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    fetch(e.request).catch(function () {
      return caches.match(e.request);
    })
  );
});
