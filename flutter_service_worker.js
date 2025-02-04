'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "74eb2c078835752813a00b4ff4ed18bd",
"assets/AssetManifest.bin.json": "0aed7b4c86ad73afadc76bcf08a81052",
"assets/AssetManifest.json": "060e04fee7dfb1f8b7f37df118956820",
"assets/assets/icons/Download.svg": "7503e783caaffb2285d38f13a4e606d4",
"assets/assets/icons/facebook.png": "de502d6b3851eb0ec19b8388790709f2",
"assets/assets/icons/facebook.svg": "0b842c1abfd5082953543832621c2863",
"assets/assets/icons/github.svg": "5e3afb28eff22a2ec4d273e626db5b98",
"assets/assets/icons/instagram.png": "6906f823be5c70b26beec631f7e157e6",
"assets/assets/icons/instagram.svg": "9b7e32160089025b60b3b8d80f19ac3f",
"assets/assets/icons/linked_in.png": "a7007a77be67b4b7bf14be10dee47e7c",
"assets/assets/icons/linked_in.svg": "93fdcb5bdd43ad5c8cd2a887248c420e",
"assets/assets/icons/mail.png": "6a19cfc6bf9e654dead3511f77e853f7",
"assets/assets/icons/menu.svg": "44666f9c0fc7420f361bc070b0572862",
"assets/assets/icons/phone.png": "b11ea12f43e6c897b295008555a97951",
"assets/assets/icons/service.png": "0b1a8cc712947c01019bfe1614a4c782",
"assets/assets/icons/skills/bloc.png": "4a37a50d5df6d7bfd4069fde2b6008d4",
"assets/assets/icons/skills/bloc.svg": "270aedf5db16902c749194e553cf51f3",
"assets/assets/icons/skills/dart.svg": "ea77ff09387753fafea81777bb67b535",
"assets/assets/icons/skills/django.png": "85c473cdc656ab00c1c72462299739b0",
"assets/assets/icons/skills/django.svg": "8160f5c29acc557f4a24eb25d592d012",
"assets/assets/icons/skills/firebase.png": "3f467d0318f803aebbb08fcf7e0c10b8",
"assets/assets/icons/skills/firebase.svg": "0362fad28fbd076085bb56131c2bb80d",
"assets/assets/icons/skills/flutter.svg": "7808748dcc6e9f53fbda3758989a71c2",
"assets/assets/icons/skills/getX.png": "2914e5fac379501cd2eff871001f8b1a",
"assets/assets/icons/skills/getX.svg": "f1c7307e27b89de5322b6915760af6bc",
"assets/assets/icons/skills/git.png": "84d182078a79d5e0ab6055ca8ed24028",
"assets/assets/icons/skills/git.svg": "c5f82a8e2929fcfb4575b43cb5a05ac9",
"assets/assets/icons/skills/Group%25209%2520(1).png": "248d9c591a5833370e93f295fe10e593",
"assets/assets/icons/skills/provider.svg": "6d2cfa5482b62fa23e719f81c7e6b7ee",
"assets/assets/icons/skills/python.png": "7673dddc4065bcb2bfdddb41bee08cbf",
"assets/assets/icons/skills/python.svg": "ef09b82f68a9ff3f6e883901474da289",
"assets/assets/icons/skills/sql.png": "a99a937e1ebb5357ff7c93d5a55a6597",
"assets/assets/icons/skills/sql.svg": "50226d9704f5633e17bd6506b4f69c6f",
"assets/assets/icons/skills/tensorflow.svg": "56d0ac5512f9cbb56e2dc63dac090354",
"assets/assets/icons/skills/Vector%2520(3).png": "c91f694e9b42b1d943cb28e9a468ef90",
"assets/assets/icons/skills/Vector%2520(4).png": "138a4d26720ac1523c918e3922059045",
"assets/assets/icons/skills/Vector%2520(5).png": "b30fa73efcb824c305d5e38e7189a06e",
"assets/assets/images/placeholder.png": "8057445ee61f0662c373e0503ec524d5",
"assets/assets/images/prof_1.jpeg": "a4e718b2de49516fe43efa0a201cef76",
"assets/assets/images/prof_2.jpeg": "796211619dadf2f3b3fd367c15c918ba",
"assets/assets/images/projects/book_reading.png": "add6aab7670f8a9ed9f44dde9acc1107",
"assets/assets/images/projects/cinema_app.png": "c451416b0a458208cf35f41d111ca5cf",
"assets/assets/images/projects/covid_19_app.png": "c183c0bd3cc9fd5319025f616dbdb861",
"assets/assets/images/projects/daily_exercise.png": "377356c0a91b2dea939338e9f98fa489",
"assets/assets/images/projects/english_vocab.png": "bd5232a0cf9667b3a72301124742aeb5",
"assets/assets/images/projects/e_commerce.png": "b92dc04713fa41c0c7b2d358969cccd1",
"assets/assets/images/projects/e_learning.png": "4bedc34b6fb28a19e5451c657a123c8e",
"assets/assets/images/projects/fitness_app.png": "01706bcd796680cbe4c6e99373c9d3e0",
"assets/assets/images/projects/logo.gif": "94341511cb76514e93d956a27e82c769",
"assets/assets/images/projects/moafa.png": "8fd422e88bd5012b7acca8b250561658",
"assets/assets/images/projects/news_app_thumbnail.png": "79dacfd682a55abd266402b9b1133463",
"assets/assets/images/projects/plant_app.png": "32e571ee6d5ac36ed8adca2fa633757e",
"assets/assets/images/projects/plate_perks.png": "4bb424106d032236f19c4a2735a8bb6e",
"assets/assets/images/projects/quran_app.png": "1b2e055c00d22f28c2dae9d139689636",
"assets/assets/images/projects/restaurant_app.png": "7ef1764e1293ab2633778a4e75e503c7",
"assets/assets/images/projects/scooter.png": "8d4352173b273e0118a291176f8d05e6",
"assets/assets/images/projects/shop_app.png": "af46a1e932aff7ac679d30ef0b360be4",
"assets/assets/images/projects/social_app.png": "92a2fc47e6468b8aaa9e86c89f9ec0fb",
"assets/assets/images/projects/social_media.png": "4025ca1e6d8a25340cf8aa56807646ec",
"assets/assets/images/projects/tasky_app.png": "bc08738dace3582a68213b30c36cd2cb",
"assets/assets/images/projects/task_reminder.png": "fee518c20106ded2b4f4a70582e6c948",
"assets/assets/images/projects/tickets_booking.jpg": "49d143b27f8210bbdbfae380f3ca02d2",
"assets/assets/images/projects/vase_app.png": "f1d7678f63b7e3f1af2a3a790b05bb25",
"assets/assets/images/projects/watch_store.png": "b206ff1f8cec83e430503ead4aec7c56",
"assets/assets/images/wave.png": "920680c7172204a840541d3c7ba71a00",
"assets/assets/json/projects.json": "62a87d3161b968197cf449de5cbcc032",
"assets/assets/json/services.json": "a790771afda81776d8ed5b0f7796a983",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "df68b720a09e6648899b6f5d66ce6c2a",
"assets/NOTICES": "249268772612a03a5b2dba5d9b2b16d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "08e71384f74783dbaecfcd462b91a162",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "37665959f399735986a86ac5b33a73c2",
"/": "37665959f399735986a86ac5b33a73c2",
"main.dart.js": "e49d20db38c43507ef1178cfa9e2725a",
"manifest.json": "ce52bb2e6766a7386a6afa91e88f23fc",
"version.json": "ba183e2e2dbcc466658e77644059bfae"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
