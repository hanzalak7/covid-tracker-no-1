if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"e3c07e94db4a13e506538ae26ca7bf0d","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"e3c07e94db4a13e506538ae26ca7bf0d","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"874fd88c227ce8213cc30158ea46c11b","url":"static/css/22.4247d24c.chunk.css"},{"revision":"17c389cf17272b648b44e76c5263a4fd","url":"static/js/0.ad9a7acd.chunk.js"},{"revision":"9d7a9ed52e832c5f9f2c58aaf2800df2","url":"static/js/1.14f0a645.chunk.js"},{"revision":"6ee8add9477a073416ecf23c191b8661","url":"static/js/12.03d33749.chunk.js"},{"revision":"f313d1d1f817320ec2e1afb4ef6315e5","url":"static/js/13.4042fc6a.chunk.js"},{"revision":"f429e4d3d665b3287a14f9c9f8075445","url":"static/js/14.0e822b3a.chunk.js"},{"revision":"d26830c4543c06f9aa7aea1368fc6ff2","url":"static/js/15.6f4de8a8.chunk.js"},{"revision":"2eda117f2428b672888bc32c334914b6","url":"static/js/16.8694e312.chunk.js"},{"revision":"0c3501248d955312c59007186f94b505","url":"static/js/17.dbbd25f3.chunk.js"},{"revision":"16b1bf51588478d5a485c45543252621","url":"static/js/18.e41d3722.chunk.js"},{"revision":"0bb720ed823efc9361bb296a390508c4","url":"static/js/19.592fd2bf.chunk.js"},{"revision":"1719be0aed4a647ef0a0b11dca617c68","url":"static/js/2.2d42af5e.chunk.js"},{"revision":"ba173e4b048604c055e59e805f195341","url":"static/js/20.9ad9658f.chunk.js"},{"revision":"33bd78e641b9816ae2c5a1da15c01952","url":"static/js/21.02535bfc.chunk.js"},{"revision":"3446268769b4ecc5d50670492c5806ff","url":"static/js/22.772f4a3e.chunk.js"},{"revision":"3cef61e18aaff8ab33a6fc6be257bacf","url":"static/js/23.c34a677a.chunk.js"},{"revision":"ee6b78bf6ee8bfc8a1880c9b281089e4","url":"static/js/24.96d382be.chunk.js"},{"revision":"ef1f006a40695899b4a4a10e680d7b39","url":"static/js/25.82ae13c4.chunk.js"},{"revision":"a9c89fc56aada52a1c1029d3e0a73c35","url":"static/js/26.8ae302da.chunk.js"},{"revision":"fb1dbc752ad000e016ebfc0cf4ac7b1e","url":"static/js/27.f619f22a.chunk.js"},{"revision":"071afc56df0f647d629ab1c3d3546c5b","url":"static/js/28.f127a7dc.chunk.js"},{"revision":"fd25db2135278d930727d3f1747e771e","url":"static/js/29.1d8f5cbd.chunk.js"},{"revision":"7d4d475401d77dd5c11fb3ea1964248d","url":"static/js/3.7abec9e0.chunk.js"},{"revision":"29a28751182924115a25ca6121be3212","url":"static/js/30.94079f5e.chunk.js"},{"revision":"1e9e475ac3bbc570ad60a619e7bf9a7d","url":"static/js/31.ed747b48.chunk.js"},{"revision":"17950661b437a3526fd0007a07d5cfdf","url":"static/js/32.09a520fa.chunk.js"},{"revision":"c1d83d236432e2fcdcffa9ff96b4e729","url":"static/js/33.dacfc8ac.chunk.js"},{"revision":"82800d6e75e1d603be6ca295c5bef987","url":"static/js/34.dc2fb922.chunk.js"},{"revision":"a2e103a68e10ecc75b25459b7f26a11e","url":"static/js/35.131d3ef5.chunk.js"},{"revision":"6e2a90db1590b94829ca3f7f00055d41","url":"static/js/36.834b22cb.chunk.js"},{"revision":"685c435dcc48a958cf94bf6981c1dfad","url":"static/js/37.e092ed6d.chunk.js"},{"revision":"3382556fec679316acde2a2b955a9eb5","url":"static/js/38.dbd7868b.chunk.js"},{"revision":"3b263afe2bce708f333341c094931018","url":"static/js/39.03dfa6d5.chunk.js"},{"revision":"e0450f8439a75e23a0b36876cd4ed985","url":"static/js/4.fff38bbd.chunk.js"},{"revision":"e51be41027092ae5342a71fc36bb82ac","url":"static/js/40.8977ba65.chunk.js"},{"revision":"da2162a8e70fa4c5224289853b6cd78b","url":"static/js/41.6031bfa1.chunk.js"},{"revision":"505da1bf288d33d8de8fb8592d930a39","url":"static/js/42.45cc6199.chunk.js"},{"revision":"2a9e78fe87743aa0628b4b009430870b","url":"static/js/43.1be26e32.chunk.js"},{"revision":"296129ef70e0c0a7ca98ae9117395ad7","url":"static/js/44.eb69bc3a.chunk.js"},{"revision":"b86a7a72430d5afe9f82c622a93978e6","url":"static/js/45.487ff3ca.chunk.js"},{"revision":"834f9e4e920894ca288fd13a36902a64","url":"static/js/46.cbd2eb23.chunk.js"},{"revision":"63bc879f94d8e5de52f9aebe8ea89ce6","url":"static/js/47.f59ff91e.chunk.js"},{"revision":"3fe53582a410ab46a4503e9c4d26ae68","url":"static/js/5.13c10a2c.chunk.js"},{"revision":"1adf961502e43fce8ba433f5c36809da","url":"static/js/6.116748d1.chunk.js"},{"revision":"666c1ba1cab90d93658d1527f90e1d89","url":"static/js/7.6f9a959e.chunk.js"},{"revision":"6101f2d84a350113f8a1fffad1cdcfd4","url":"static/js/8.17f60455.chunk.js"},{"revision":"60986cfe0b08e4dc9f82c10c78b6850a","url":"static/js/9.758369c0.chunk.js"},{"revision":"c827398054b69ca47ababa89aa38d79c","url":"static/js/main.363ac038.chunk.js"},{"revision":"781678591cb0f3396247fc7cacffdbd2","url":"static/js/runtime-main.eb5dfb01.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
