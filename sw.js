// این سرویس‌ورکر خیلی ساده‌ست و فقط برای شرایط نصب (Install) کروم لازمه
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
