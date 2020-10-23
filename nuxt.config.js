import axios from 'axios';

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.BASE_APP_TITLE + ' | ' + process.env.BASE_APP_SUBTITLE || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.BASE_APP_SUBTITLE || ''}
    ],
    script: [
      {src: 'https://cdn.myth.theoplayer.com/ac28db7f-ce62-4420-805e-a439cb54e97f/THEOplayer.js', type: 'text/javascript', charset: 'utf-8'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
      {rel: 'stylesheet', href: 'https://use.typekit.net/zcx1erq.css'}, //Adobe Font
      {rel: 'stylesheet', href: 'https://cdn.myth.theoplayer.com/ac28db7f-ce62-4420-805e-a439cb54e97f/ui.css'}, //TheoPlayerCSS
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    "@/assets/scss/style.scss"
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    "@/plugins/axiosAuth.js",
    "@/plugins/vue-mask.js",
    "@/plugins/vue-zoomer.js",
    "@/plugins/vue-countdown.js",
    "@/plugins/vue-form-wizard.js",
    "@/plugins/vue-social-sharing.js",
    {src: '~/plugins/vue-persist', ssr: false},
    {src: '~/plugins/vue-unity-webgl.js', ssr: false, mode: 'client'},
    {src: '~/plugins/vue-carousel.js', ssr: false},
    {src: '~/plugins/vue-fullscreen.js', ssr: false, mode: 'client'},
    {src: '~/plugins/vue-calendar.js', mode: 'client'},
    {src: '~/plugins/vue-add-to-calendar.js', ssr: false},
    {src: '~/plugins/vue-calendar-scheduler.js', ssr: false},
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    "@nuxtjs/moment",
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'UA-181136456-1'
  },

  moment: {
    /* module options */
    defaultLocale: 'es',
    timezone: true,
    defaultTimezone: 'America/Mexico_City'
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/device',
    '@nuxtjs/dotenv',
    'vue-scrollto/nuxt',
    'bootstrap-vue/nuxt',
    'nuxt-sweetalert2',
    ['@nuxtjs/axios', {
      baseURL: process.env.BASE_URL || 'http://localhost:1337'
    }],
    // Doc: FontAwesome
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend(config) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  },
  /**
   * Auth configuration
   */
  auth: {
    // Options
    strategies: {
      local: {
        _scheme: 'local',
        endpoints: {
          login: { url: process.env.BASE_API_URL + '/auth/login', method: 'post', propertyName: 'token.token' },
          logout: false,
          user: false
        },
        globalToken: false,
        autoFetchUser: false
        // tokenRequired: true,
        // tokenType: 'bearer',
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: false // Page to redirect after login
    }
  }

}
