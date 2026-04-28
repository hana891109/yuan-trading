// sw.js - Service Worker
// 讓網站在關閉後繼續背景掃描
const CACHE = 'yuan-v3';
let scanTimer = null;

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));

self.addEventListener('message', e => {
  const { type, data } = e.data || {};

  if (type === 'START_AUTO_SCAN') {
    const mins = data?.interval || 5;
    if (scanTimer) clearInterval(scanTimer);
    scanTimer = setInterval(() => {
      self.clients.matchAll({ includeUncontrolled: true }).then(cls => {
        cls.forEach(c => c.postMessage({ type: 'DO_SCAN' }));
      });
    }, mins * 60 * 1000);
    console.log('[SW] 自動掃描啟動，間隔', mins, '分鐘');
  }

  if (type === 'STOP_AUTO_SCAN') {
    if (scanTimer) clearInterval(scanTimer);
    scanTimer = null;
    console.log('[SW] 自動掃描停止');
  }
});
