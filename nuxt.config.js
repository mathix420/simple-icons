export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // TODO: add more metas
  // TODO: add icons

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'simple-icons',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/pwa-update.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Simple Icons',
      short_name: 'Simple Icons',
      display: 'standalone',
      theme_color: '#ffffff',
      background_color: '#ffffff',
    },
    meta: {
      lang: 'en',
      name: 'Simple Icons',
      mobileAppIOS: true,
      theme_color: '#ffffff',
    },
  },

  // https://github.com/nuxt-community/svg-sprite-module#options
  svgSprite: {
    input: '~/node_modules/simple-icons/icons/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
