'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "50729900a0ab7dd676be21839adb71e8",
".git/config": "7996e9d2423da5d087823ce13e3a5273",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e64488e507a97da96b27ef7e89ceeded",
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
".git/index": "77cbb7ea48ab489833a7d6baf17003c8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d8b2fd8c94c63c955ffa79cfad9ea35c",
".git/logs/refs/heads/main": "a254515b135b0de0467249e2b32b1871",
".git/logs/refs/remotes/origin/main": "5d15b8d151bd1b3f9fce0d80b8c99bf9",
".git/objects/02/d0e2d13d90ab36941d5ef5ff4c1c799c182a93": "853a0c5d9e56038f242a7e9162c88c78",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/09/0141b4a458086c014568f187e31944a00a4a89": "bba291031dab40ecb568cd8772a11a0c",
".git/objects/0e/182e0fcf14c9209e9a53c4ff545f979d679818": "70d5e1150effbe7465ed90b91f2f2ead",
".git/objects/14/2eeb5682260abe2507781886ab636ca48e0003": "3523cd2ec205c862032e51bb607eee88",
".git/objects/15/7983f18f950849402686dd8e9e3f017df461d0": "1209a002ae59394fd2ba6619187c6df8",
".git/objects/15/dfd18c5fe3d0bd60a3963524188e6882e09a77": "e1e328e4ff1f326849dbf9e15060bd41",
".git/objects/20/14746cd4b3407ff36415db71fc9a20f162206f": "1ccf8e4baa6e3cce6ba352f541234824",
".git/objects/23/85c1ceee9c42131be85373eb08ac58a9f6a98b": "af3687d33a77eba9271f414c67b01c2f",
".git/objects/24/a3c0ed2f1699d667165697ccab40e036cf265d": "ce8f4935ea93e59de1585e54dbd9678b",
".git/objects/26/a5f330d58c96b74f3a31cd47058ab7ecc18f6c": "c98416abf1f52741e6b68cb3552d7c7d",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/a586fe92234ee23eafa5fefdea438fa5080fa1": "745fc759e7be4b17cd884e8dbbd7c76b",
".git/objects/29/e65bcdbb162c89e74eca84900e4f3685013bf2": "01526396418aac4da87727026a635f57",
".git/objects/36/a30bbd9b14b63b684895bf51415937d9389326": "53109318e7a63932903db2896088ea44",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/4d/75211f7eee5de56a8d48d22955f7e0f4e03008": "6d5bbcf42f42407c39726b9063e9386a",
".git/objects/5b/501d9ac10d6162715c4ad410d6bb865464ab01": "16762a0cf4cea7ec8a07bf7e14fc317b",
".git/objects/5d/d9de8a0c13209b2b8d77c4351bd0bd4629076e": "39efb69fec78892cb7ce8796609df1cc",
".git/objects/5e/bd8d0901d4c3b68e629824fbacf63aa355f1bd": "260f0b1753add8af4fd0ea6279c6d64f",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/2c936b0c6a1925c9d40a2495d61df25e91bf12": "011b12a9e6e3657600d390e2f3e2d193",
".git/objects/68/663556dc6eff341d5996fdd23b919ec62d3e67": "17ce9b45957d77b1226d8236ee690f69",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/70/5b121e9980a0757819ef9d794738cd25870343": "7a1a9e0651ed306ae5eb68cdd69110e9",
".git/objects/73/43d03e74b51da9b2137e9b375f8343f77cb289": "8b0a0a00dfba5e7e00cdfb884fd15f43",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/79/8961c7801fa28b5308e64e501b7e5237cadeb9": "379118d80cab9a9bd175e6a3e244f37d",
".git/objects/86/9bd9b3e07c8b8f4f93c18eccb0a8ac170ccd69": "7f4576508ff5b4bd04623f95acdb5f24",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3d94800fa78642e8fc7b367ad5f2b1cd8dff0b": "b01d338996270d32ac4cecf51b894419",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/93/cf8bcbe3942aaff5297dad25fb2ec03f958eae": "f6fe5d4d89f61555d4fb60c94b1d51cf",
".git/objects/94/675bfb7205b5ca0fcf141571e7db6b8363c346": "c85e7ba4f34ef5b0baae1b64870143a9",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9c/85107bcf11fe2b171a29049957e6b45d8276f6": "b3719c6871ec922f5942a8a1e81991ea",
".git/objects/9e/68ea8a685fecf3745a5673b5cc6f6b26dbc0d0": "b9697cd8ea91a351960dea039149c5cf",
".git/objects/a3/d9de07cd5cd496b138875095e77285c7fa42ae": "d029afe64c6ac0bc65bb03260e9cb55c",
".git/objects/a6/1f46276af231f811287fe6057cd512042c2950": "25631615b95359cd644ea7d37117de82",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/ab/29d85d3be02f3d19a277ec760add50505e36e0": "0e391729b8f264ea12d10844ce6adedf",
".git/objects/ab/5b61560baa25c45097ea82655d5289814445e3": "fc7dc0f4b44e7c9e21c0632028679f7d",
".git/objects/ae/9d5352fe1e7752f2449e89c5300a0d15108ae0": "3a2a71013a9cbe9b4d6954d2cd2a791d",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/f339869d456f621047dd19510d3e7f9a935633": "87295d2710149894325db9a501b08ce8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/2866e6df9e14635db76dba3caf6784a6839b1f": "7db939f620563770acb03819b33dc177",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cf/7d83a19f0e15bd662db4cf9505a21317e5173e": "ba438cdee1a2a6728a75d13907658a3c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/e021289336dd35407ed64856e21a9e9f8bdde7": "1c6b5453901977db009c177e3ccbcd55",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/0ac04b6358037a90c15aba9c4bb6e5e586e295": "3e08287dd13ed362c280a8b89a824a5f",
".git/objects/f0/4899eb5db7a40fa7b9711cfc1dd371365cd398": "d49c7eb97ca3988f4f0dfbd352c52c3b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "56fd31a386c6c10cd7d28b0ed7b5cd75",
".git/refs/remotes/origin/main": "56fd31a386c6c10cd7d28b0ed7b5cd75",
"assets/AssetManifest.bin": "fda04486ef009b11bcaf28f1726985ea",
"assets/AssetManifest.bin.json": "994b6b7c52f020a1d9dd01d98cee25a1",
"assets/AssetManifest.json": "73be63ac1dff49f49ad3fdaa699a7599",
"assets/assets/images/bg-green.png": "fe59e19f241af6e9ea97a7611fb900d8",
"assets/assets/images/ratn-favicon.png": "e414282ba15d4791961794ee5c646d18",
"assets/assets/images/ratn.png": "3ae32ff5d922a083e11673c5c3800a48",
"assets/assets/svg/bg-green.svg": "ef99ab370dcc771ef278c7b6c39b0ad2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "dde7fed192ce6377190ec350b68576e4",
"assets/NOTICES": "2b9d08b1620cf46a56ea3985553882cd",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "8b8fea725eba25cdf8fe83b969bd5719",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dac74642684b3b6d3dc3ecab61b8b72e",
"/": "dac74642684b3b6d3dc3ecab61b8b72e",
"main.dart.js": "dc7511844635f72df8016dcdfbd9aade",
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
