// Service Worker para Beijo da Rua PWA
const CACHE_NAME = 'beijo-da-rua-v1';

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalado');
  self.skipWaiting();
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Ativado');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Limpando cache antigo');
            return caches.delete(cache);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Estratégia Network First (prioriza rede, fallback para cache)
self.addEventListener('fetch', (event) => {
  // Ignora requisições não-GET
  if (event.request.method !== 'GET') return;
  
  // Ignora requisições de extensões e analytics
  if (event.request.url.includes('chrome-extension') || 
      event.request.url.includes('googletagmanager') ||
      event.request.url.includes('googlesyndication') ||
      event.request.url.includes('ezojs')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clona a resposta para armazenar em cache
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Se falhar, tenta buscar do cache
        return caches.match(event.request);
      })
  );
});
