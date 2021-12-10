export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PROTOTYPE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/ts-plugins.ts"
  ],

  router: {
    middleware: ["auth"]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:8000' : '/api'
  },

  // auth0 strategy: https://auth.nuxtjs.org/providers/auth0
  auth: {
    strategies: {
      auth0: {
        domain: 'dev-vxtacezw.eu.auth0.com',
        clientId: 'WQXqR3LFHXLjtujBIU8U4eWR0qNv4OhG',
        audience: 'https://identity-2-brand.com/api'
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/',
      callback: '/login',
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    parallel: process.env.NODE_ENV !== 'production',
    cache: process.env.NODE_ENV !== 'production',
    hardSource: process.env.NODE_ENV !== 'production',
  }
}
