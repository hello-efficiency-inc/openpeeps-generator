module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'Get Peeps',
    themeColor: '#fff',
    msTileColor: '#fff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: './sw.js'
      // ...other Workbox options...
    }
  }
}
