'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "31ab8d0aa9d23ba419c52e19f9c05999",
".git/config": "794d0cdc826cc4b65b3c1713a0e3650a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b6dc3e9df65cd69c82c1cf799f77079a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "992cefea5030096cf3640b06d876e148",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eca98180399666b16d97dcaa98ba3b15",
".git/logs/refs/heads/main": "eca98180399666b16d97dcaa98ba3b15",
".git/logs/refs/remotes/origin/HEAD": "9d0776237122ea334379e8a4a9024888",
".git/logs/refs/remotes/origin/main": "9dea07fba2cf5171d7d4ca6a74bffca0",
".git/objects/1c/0b74248f5abe07d63c0f3b89e8b879f26912c9": "108716fd7492fe2ec89825152219e6bf",
".git/objects/24/51559763e31ffca3e23e7efca8d9edd60b8034": "b9310bdb54f6e21143c78063896cc220",
".git/objects/2b/cd9b168c6ea943ebced2a80ed2458239f82f43": "0f39be03b9f0f4f3f194830c2b798436",
".git/objects/3d/73d5ded698cc807f949000469c0a32b552b6ef": "f64cc3328f40a56723c3935ed986012d",
".git/objects/42/c46110b0644a2a31dfe675d5a1c94f4038d843": "a78993bf8fdb96d99358355442ceaf9b",
".git/objects/46/cb5c67dbee88aa3cd39606da28ec437f8d9ecb": "247408a7c0868f41b6f5d09af7a0c26b",
".git/objects/4b/09bf9fb53ec38b547e8f6bc313c04313ba1a24": "512822e4723e5926e72fd26b6058928d",
".git/objects/6a/955c7b44e61abd970f2c52835e3e720ec9cf1a": "09e24bb16c37eeb121b136a4781fa610",
".git/objects/74/d8934971b718e662b86facdb05e64e13f77e52": "55adabdcd88e0e398a189eb4f10947c4",
".git/objects/80/af6a3ec6b53c09844fdbac5c2c0d8887ed8aac": "3e03ca822e903e3cd74465fff3e1e57b",
".git/objects/b0/f9104d438eec022f15f2355f57425ae5183207": "f0691b7bffe583505e744f82a09d1f6d",
".git/objects/b9/84019e8277bed02ef7d51373166a723aa38e7e": "fc4b4ba06ef4b624bb342b835fa68580",
".git/objects/bc/378efbc096cb1e1e3fdbc39ef74fd1d6908f73": "546b5896240429c18602861c4aa2040f",
".git/objects/c8/35d334912ff1167bfd739c2babc0c2af82159f": "5408e00fb9ea876bb20ff993d1a0c057",
".git/objects/d3/c96dc64fc982b1a7392e0b3f308d701251c773": "5e5c2ba5c12ecec724b4fc3131c20667",
".git/objects/d8/f218c9c85a1816f3ab9bbb220a9178d325c907": "707102da22956dcf61ee550dc847fb3f",
".git/objects/db/ae564e894f0dd52c6dc13e3cf448163af409fe": "e833de6a2c3503b5bf5e55759bd2ab24",
".git/objects/ea/832ce1f3b736988629ea063254d7fdaa07530a": "dcafc42765d22d1e12ef946139a2f614",
".git/objects/f5/9a299a5dc479695931c09aa6e50379221d05c4": "424cbc1528b54b7f78b3a0d47c0b3cee",
".git/objects/fc/a1ad319f99f5e79e569731ed05cd11b3e3ddf7": "58a73abc8f682dfed49b57ff75e3b9b6",
".git/objects/pack/pack-af105c56683c717958e79c13d2da8db63a5ab4a6.idx": "6a7a74bcbd45a100f3f1b6d67474061c",
".git/objects/pack/pack-af105c56683c717958e79c13d2da8db63a5ab4a6.pack": "db28316e1b8963fad227b255bfe2d483",
".git/ORIG_HEAD": "d2cc62d981a83ba1a314271956c00929",
".git/packed-refs": "61a0b1b3e52634acdb7ac2d45d8af79d",
".git/refs/heads/main": "d6768b38e80a4982414d2f6d26668c45",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d6768b38e80a4982414d2f6d26668c45",
".git/sourcetreeconfig.json": "3a0eac02d79ec6073d1f8445e6c5f96d",
"assets/AssetManifest.bin": "918e423045047673cdff9b20fb0f8fce",
"assets/AssetManifest.json": "bddacc7b4db6ebcdc6b69d4470e17974",
"assets/assets/bag_ground.jpg": "f508d959bcbe6729d320ce94ba859b23",
"assets/assets/bus.png": "89b4b0a0aa1e1f2488dde215458c0c57",
"assets/assets/default_user_images.png": "ebe3bdf6f938c24956d96550c242980d",
"assets/assets/Emp.png": "5ac9c277ca4e8828ed734d740d907607",
"assets/assets/fonts/file.zip": "0f745f612e64f1f0835db88c6c972aff",
"assets/assets/login_pages.png": "87455b841a057e95bbacddde7e548ba1",
"assets/assets/member.png": "9ea29847193047b9944b83bfa2592c3e",
"assets/assets/Report.png": "18a5ae34029edcf595abe7546caecbf4",
"assets/assets/Route.png": "5bb5b44ef5fdf6a97d11e2838c2e807e",
"assets/assets/Transection%2520%2520Report.png": "c7061611c5df490637308e085ea510ae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "33eca41d4ea6180320d6101c85be7b78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0ff4e1985d8e4e83c4a3f460dd0f29d0",
"/": "0ff4e1985d8e4e83c4a3f460dd0f29d0",
"main.dart.js": "f95251dc85f18d370c5ee23bb3f2a6f9",
"manifest.json": "1716186101884f61dcbb27306ee523e3",
"version.json": "ddad876db39c308af77cfff735ede678"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
