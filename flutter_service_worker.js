'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b46b26cd7070973b0587c4857fe5ddd3",
".git/config": "a4f14c458c2877dec3644589343544a2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "248dc54544fe4aa37fd66b2c72846224",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1ca7a219aa82e10a7bfeaf01f4a9a8ad",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e1b6130fe16af10df246c8a1392b2d93",
".git/logs/refs/heads/main": "44bd2109f5933a5d6dda9442afc4e199",
".git/logs/refs/heads/master": "032446aca0b3602210f246733b92dc4d",
".git/logs/refs/remotes/origin/main": "5ab75ad6ef6aab51a52dcce920805cf2",
".git/objects/01/83abb6ca979ffd9dc96539596941d1a01e2eb8": "360391a5b5aa1e311a5509d3ee8e5007",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/09/0141b4a458086c014568f187e31944a00a4a89": "bba291031dab40ecb568cd8772a11a0c",
".git/objects/10/5188d6b82caf554d7921fa4c6f6d4018db83e0": "f4f27b05ac520d8a076b5cd6da361105",
".git/objects/14/2eeb5682260abe2507781886ab636ca48e0003": "3523cd2ec205c862032e51bb607eee88",
".git/objects/15/0f4fb44e9b2397cadc5ed97be2b7f3eefacaa3": "fe8065409d8d5d1affb512af6aa60404",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/f4a3cead63f3f47d4c130fcf4119e3fe1f6fcb": "eddc51869e8bff4c5a8fae1cf03ca453",
".git/objects/31/555354957e06bdad02fd06400089095066d0b5": "e521bb76b2ad8ac78e77a267fc4596c1",
".git/objects/33/a27b99176c40af3837d5c37f2e38d1df94e9a3": "d6eb26f695f948cd8c62f536a3939d32",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/4d/75211f7eee5de56a8d48d22955f7e0f4e03008": "6d5bbcf42f42407c39726b9063e9386a",
".git/objects/52/c4fda233319e659d7452f4a9f5b8e645f008fa": "249b15962b8d216d1090a48345ca0f0f",
".git/objects/54/9e399c79581d1ebf1d4e9c022a0a7e8782a02a": "27a360fc2082ce14d349b7a9f5a80911",
".git/objects/5b/d348bb0e691d03ff42ba2f1e4e0badec660c3a": "841af411a10a4f638a5f0f6a5156f7fd",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5e/e2b28d57e7f9b2585b23813733c15b73717667": "533f8be16aed2d8f2e54ffe317ed9ed2",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/795323ddaed1523ce91649b1bf66f5c8d73d20": "474fcec76cd2d6c76c08de88d5eb0cbc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/90/7a8f5bd4a8221c31d1ba224d2ab866c8e7ec03": "209581aeaf9bcf953752aca43ff48106",
".git/objects/93/cf8bcbe3942aaff5297dad25fb2ec03f958eae": "f6fe5d4d89f61555d4fb60c94b1d51cf",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9b/139cb37087cab4b90c54f71a63cdf6155ff9dc": "752a1d4357f5617728f80f6bf6b541de",
".git/objects/9e/68ea8a685fecf3745a5673b5cc6f6b26dbc0d0": "b9697cd8ea91a351960dea039149c5cf",
".git/objects/ab/1b6c982cb6d447cf2b448bb2b0587472b0056d": "8415c3c74a8087e8e7fa6e418a637698",
".git/objects/ab/29d85d3be02f3d19a277ec760add50505e36e0": "0e391729b8f264ea12d10844ce6adedf",
".git/objects/ae/ce2d4b5fc7e21fc22de14680be399259f424f1": "ee13d44d9f282cdea2c78fa6936f7311",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/f339869d456f621047dd19510d3e7f9a935633": "87295d2710149894325db9a501b08ce8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/93fab0561e4b061b4c31c9b62003ed014bda2e": "8e94c01b8cc3c78f2e707f41f7d251a8",
".git/objects/c7/b9f8e76e5fbf6164c71f6d933d0a67d7fc11d8": "8946dec6dd6769d9dfdb77db9ca1dc12",
".git/objects/cf/ba8e21a9d8cbe0d5429ddc03ae9f9512b5c09c": "f4d12668e581f0875b2839d5e6722bb5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/1d5663ce4e46fd9e10af60787540df044facbe": "84cc45e7ca2dfdb897e6bddd521dd847",
".git/objects/e0/dc73177293fbd6a405d22b5810ad2a5cd8bc1a": "edf1ea75ebfbaaf0be2f35e39300c028",
".git/objects/e3/a5bded414df0bd993545905ebc0a13b6a9aca8": "58ebb4045122b9da218c94c0c82b0f97",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f0/4899eb5db7a40fa7b9711cfc1dd371365cd398": "d49c7eb97ca3988f4f0dfbd352c52c3b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/82f5123c07300ce737610a0e3a4ac46ea675b6": "397feaa8c7059f36aa224a9e0e55c6f3",
".git/objects/pack/pack-f25250c6c0c310914f36ef3cbba7d02fcb23e9d6.idx": "5b91e758c1bbe427a63e84c51641d253",
".git/objects/pack/pack-f25250c6c0c310914f36ef3cbba7d02fcb23e9d6.pack": "c2d48d61e2bb024d4885892efce36b69",
".git/objects/pack/pack-f25250c6c0c310914f36ef3cbba7d02fcb23e9d6.rev": "f4d8018db183d47929b8274c41d2c509",
".git/refs/heads/main": "d18a4ee90e3a1f6fbb2d78218e567c47",
".git/refs/heads/master": "1d2ba3140bbdfe3bc0fd29e1402e77c3",
".git/refs/remotes/origin/main": "d18a4ee90e3a1f6fbb2d78218e567c47",
"assets/AssetManifest.bin": "0bc4c7a0e1e25b87a1b3ffd12c2bb8b8",
"assets/AssetManifest.bin.json": "210d487eb91bb2a24cb477f664860b00",
"assets/AssetManifest.json": "9e242d91c50e3e0665522165be9e6715",
"assets/assets/images/bg-green.png": "fe59e19f241af6e9ea97a7611fb900d8",
"assets/assets/images/cyber.jpg": "f4df4bc49a8fdeba5f299d07a6fc604e",
"assets/assets/images/hospital.jpg": "817a9d0dcdd19ebcdcf04cd51eebeca3",
"assets/assets/images/ratn-favicon.png": "e414282ba15d4791961794ee5c646d18",
"assets/assets/images/ratn.png": "3ae32ff5d922a083e11673c5c3800a48",
"assets/assets/images/timetable.png": "5b28b001ef6598d8641664f891844d25",
"assets/assets/svg/bg-green.svg": "ef99ab370dcc771ef278c7b6c39b0ad2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "6654c7345ba12598c1bbbcd984e49e08",
"assets/NOTICES": "b5b39d150a1e8d11c235e0917d374823",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "e414282ba15d4791961794ee5c646d18",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "96daaaae69cf289a02b8f07ad597be2c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "24320422d543873885896219760fd2ee",
"/": "24320422d543873885896219760fd2ee",
"main.dart.js": "f6887e8932cde956e174433b16d7077c",
"manifest.json": "79452ba7102a25250734de6f8f12cb79",
"ratn-favicon.png": "e414282ba15d4791961794ee5c646d18",
"version.json": "c0bd6f6f8fcf353aadf714c6df8ee2de"};
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
