'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "407d4c19b6338e455cb2b9337bcb13b4",
".git/config": "794d0cdc826cc4b65b3c1713a0e3650a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cebf25e79335f8e0ca02dce2392aa125",
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
".git/index": "d3de32c33f457384a163870072b87f21",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8e681e0e4d032298a0dbe8816514a6a1",
".git/logs/refs/heads/main": "c5b05caf50c25e9d29d7aee88cc4e648",
".git/logs/refs/remotes/origin/HEAD": "9d0776237122ea334379e8a4a9024888",
".git/logs/refs/remotes/origin/main": "9d30e66c3ce33911e526395bc68b04cb",
".git/objects/08/269deeb1ff2fa45e5f55f024740b9f6dd4648e": "1f10843d67aa17fe032fed8ce7d918f5",
".git/objects/0e/29adc6bd5f07646e7dd29c5b00f6a23480ceb8": "f09f57b0630478f0abce748b6ed22b7c",
".git/objects/10/51cdc4eb32abf4077f64511df4f065df89ae57": "f44819f796f03105285e6a99f868ebbb",
".git/objects/11/6b451c7c51738bc289de819c458b1c0b3602f1": "244890446cba968a8e0e07c6c98ffb4f",
".git/objects/1c/0b74248f5abe07d63c0f3b89e8b879f26912c9": "108716fd7492fe2ec89825152219e6bf",
".git/objects/1f/7e759de4e945c09b06629a2b5203cc9200c4dc": "8e08f31d61ff654738e4113f5760b7e2",
".git/objects/23/a2c5e8e1d99ae842dd25f39b3f52dc107d9dc0": "52c7c54643307c028b921f4041ff24d3",
".git/objects/24/51559763e31ffca3e23e7efca8d9edd60b8034": "b9310bdb54f6e21143c78063896cc220",
".git/objects/29/2f96d92a217214b05b138e5b3b963bd08d564c": "be94a365371f4a8a2dc61e35adc1fba4",
".git/objects/2b/cd9b168c6ea943ebced2a80ed2458239f82f43": "0f39be03b9f0f4f3f194830c2b798436",
".git/objects/2b/e623f19febd4615d8daaff75763a6f9f9703e9": "1d7cae06dd326afe3228cb22db4e6b61",
".git/objects/2d/51f5a7ee595751698853182bf4aa1b7379d033": "95919c9b58c83ed2a31b59c48acd4305",
".git/objects/33/e23745c0472ca343ed1c5bae3914ba917ab7a4": "e8fe167ccfbd3590a67f966b1b2523b9",
".git/objects/3d/73d5ded698cc807f949000469c0a32b552b6ef": "f64cc3328f40a56723c3935ed986012d",
".git/objects/3d/f60e73d28d85a3fa842eea4d3bd03dca92bc79": "357c3622696d6cb3cb989dd51c866e3a",
".git/objects/42/c46110b0644a2a31dfe675d5a1c94f4038d843": "a78993bf8fdb96d99358355442ceaf9b",
".git/objects/46/8e316b2c444216a3e7268fe6dacddfaf530a7a": "0dbdc8572654f35584ee5ed6cef08ad9",
".git/objects/46/cb5c67dbee88aa3cd39606da28ec437f8d9ecb": "247408a7c0868f41b6f5d09af7a0c26b",
".git/objects/49/ce5233d280ca1707d66729074585d6b6539457": "7e27cde0e3aac8473871da4f78d1d402",
".git/objects/4b/09bf9fb53ec38b547e8f6bc313c04313ba1a24": "512822e4723e5926e72fd26b6058928d",
".git/objects/59/4b7f80ce0b8f7ef967bf4d8098fcc5eef55a21": "510e5680ceaf1f83acdf0d06411918d3",
".git/objects/5a/1d3de73151536b9e8d1ad15fbf62c6a4840783": "5762c1d76e7e1997eb55abc468b78887",
".git/objects/62/3b43b3e2d0fc582bd52ced792d75497568d9e6": "a9b01f2bacccb85a74571fa1849cdca5",
".git/objects/65/0011e7174f39e7c49e37c3030abf15a96670d7": "c9c89fbae8bea66f49f236ef0c0c8fd7",
".git/objects/67/a91581ef1bea3de20f490de0bd8d99c4a89b3b": "a6c7bd98547577764f46ec58e1e698f4",
".git/objects/6a/955c7b44e61abd970f2c52835e3e720ec9cf1a": "09e24bb16c37eeb121b136a4781fa610",
".git/objects/6d/35eedfbc31a6294b8e7c11bb96689b65ff7cf5": "0016aa47cda063711f18bb8798167812",
".git/objects/6e/34d96bc95c1e20a80ac3faa8314dce98513547": "4699843ff10cdf25c3b08650190e0be2",
".git/objects/74/4aef7f563c5694212bc6feaa2b7256c600bdf3": "7090f0da32b4dbe7fa3308d9a54c63bf",
".git/objects/74/d8934971b718e662b86facdb05e64e13f77e52": "55adabdcd88e0e398a189eb4f10947c4",
".git/objects/77/440c01278cb16831710f832779b934b0eb4cec": "d0317cb008d4407de69c86509b0de2ab",
".git/objects/7d/4b0a2bfdb72c25cff161866bc61810abfa90fb": "e2e2d1c553824b262742c96d51d71338",
".git/objects/80/af6a3ec6b53c09844fdbac5c2c0d8887ed8aac": "3e03ca822e903e3cd74465fff3e1e57b",
".git/objects/87/41f26654a092c06cc5e6db3d1801513ec01a0b": "b4bf0ddc0b2feaade497bf1ff8415a1f",
".git/objects/87/63a3926cc321de23ec4e5442add8d21d8c7314": "45918051f1fb192c0282ffa360c621c4",
".git/objects/89/7a738acfe72e83a84cc015946068d2d1aebd3f": "eade58a0932764edfa5920d53f68d3d0",
".git/objects/aa/097b632c893bdb33dd2c0635e404ffb90f7769": "da2ef4d7c59b06d41ff483c32aa50f98",
".git/objects/ae/f0e6eae3052865b904ccee5f2173fba82fe7f0": "5b17cdcfee325e3aa9eff6c8c820d6a3",
".git/objects/b0/f9104d438eec022f15f2355f57425ae5183207": "f0691b7bffe583505e744f82a09d1f6d",
".git/objects/b4/c62e695db2a2feb848cb14fc98612f2044455e": "54d94d3980d41326f618916d5f1aa2dd",
".git/objects/b6/85528a6eb1c4a5eb65a92005502a4fb00c0e94": "17808ef755798f01b0be30b57612f56b",
".git/objects/b9/84019e8277bed02ef7d51373166a723aa38e7e": "fc4b4ba06ef4b624bb342b835fa68580",
".git/objects/bc/378efbc096cb1e1e3fdbc39ef74fd1d6908f73": "546b5896240429c18602861c4aa2040f",
".git/objects/bc/a0ffa572ceec7c096b34e198108c0bca4d9141": "3c748b3411b677f75da1f1bc6cc9faf8",
".git/objects/bd/512a98c858e7335c1c2d28427f14234020e999": "55d98efa93f4d9429592e6eb3fb1fe8f",
".git/objects/be/9fd7c65ed3fb2d5e80699b8525937d96fef5b2": "a9f031ac430576945eedfff361a94385",
".git/objects/c8/35d334912ff1167bfd739c2babc0c2af82159f": "5408e00fb9ea876bb20ff993d1a0c057",
".git/objects/c9/eb52507b779d7ba4c6c422cfb691f9698f948d": "c63fec8ec08be0b02f1c998033779267",
".git/objects/ca/2f461f31231181f3519d7a1bf962abc4c0cba4": "aec8cdb37ec5c3b997dc1e54684d7ec0",
".git/objects/cc/811027e6362cf03dea9a5d25b90a526d554ef1": "dda7687697578c9a740e3f1952e97140",
".git/objects/ce/01f459459fbf06490a35300d61dd6eb8c3f7d7": "19158eaf9e2e4445b99c13391e946453",
".git/objects/cf/17f23c353b2195c022402b3edb2fcf7ee9da7b": "3cabcc959f080b52f1370855079921c9",
".git/objects/d2/dbdcb7e25af37a58820d89ef68e61c3c241fbe": "5f659b9d31bf034fd3d382ed0483440c",
".git/objects/d3/c96dc64fc982b1a7392e0b3f308d701251c773": "5e5c2ba5c12ecec724b4fc3131c20667",
".git/objects/d8/f218c9c85a1816f3ab9bbb220a9178d325c907": "707102da22956dcf61ee550dc847fb3f",
".git/objects/d9/8e9b0bc4e75193d48c3a3ab2677cecbc8665d6": "f2cf40d9007ae3e0ca4b37945498028b",
".git/objects/db/ae564e894f0dd52c6dc13e3cf448163af409fe": "e833de6a2c3503b5bf5e55759bd2ab24",
".git/objects/ea/81ec80636b5c4e53142e01bc52f5f00e64c871": "5798461323150ada5402f20d2951a809",
".git/objects/ea/832ce1f3b736988629ea063254d7fdaa07530a": "dcafc42765d22d1e12ef946139a2f614",
".git/objects/ec/45ef0856f4b454bb8c3ef71901e703fac51475": "3df46dc43a3eaf849e8a22a12033d62d",
".git/objects/ed/55e6ac93c701e9676c19b266f0db95d4003156": "0e9609e455586edd4ac8452f23216489",
".git/objects/ef/f40f084399cb162c8a829f9d75a35d478577d9": "dab87a9eccfcba0d5921e218c3a4e219",
".git/objects/f5/9a299a5dc479695931c09aa6e50379221d05c4": "424cbc1528b54b7f78b3a0d47c0b3cee",
".git/objects/fc/a1ad319f99f5e79e569731ed05cd11b3e3ddf7": "58a73abc8f682dfed49b57ff75e3b9b6",
".git/objects/pack/pack-af105c56683c717958e79c13d2da8db63a5ab4a6.idx": "6a7a74bcbd45a100f3f1b6d67474061c",
".git/objects/pack/pack-af105c56683c717958e79c13d2da8db63a5ab4a6.pack": "db28316e1b8963fad227b255bfe2d483",
".git/ORIG_HEAD": "2b11072674490d45f93eda46b9d176af",
".git/packed-refs": "61a0b1b3e52634acdb7ac2d45d8af79d",
".git/refs/heads/main": "2b11072674490d45f93eda46b9d176af",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2b11072674490d45f93eda46b9d176af",
".git/sourcetreeconfig.json": "4856a02b0027cf354223a0c92a3efea6",
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
"assets/NOTICES": "dc1f589c9609e0cb448c9547f4e6f3a2",
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
"index.html": "ae301f1617af89ff264b354ca151f004",
"/": "ae301f1617af89ff264b354ca151f004",
"main.dart.js": "32e4d19379366aeed2f38e53d39c731c",
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
