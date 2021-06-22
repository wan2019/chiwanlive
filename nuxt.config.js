import colors from 'vuetify/es5/util/colors'
// GH_PAGES production
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        // router: {
          // base: '/chiwanlive.com.tw/'
          // base: '/chiwanlive.com.tw/'
        //   base: '/http://chiwanlive.com.tw//'
        // }
      }
    : {}

export default {
  ...routerBase,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - ChiWan Live',
    title: '趣玩影像',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:description', content:'趣玩影像 ChiWan LIVE，電視台品質的專業直播。' },
      { hid: 'description', name: 'description', content: '趣玩影像 ChiWan LIVE，電視台品質的專業直播。' },
      { name:'keywords', content:'趣玩影像,chiwanlive,直播公司,專業直播,活動直播,直播服務' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'google-site-verification', content: 'RFIF4spGaesYL_nkFdCuxh-wFESy94Oy5q89OrJj2Iw'}
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/apple-touch-icon.png' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png' },
      { rel: 'apple-touch-startup-image', type: 'image/png', href: '/apple-touch-icon.png' },
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/assets/variables"
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: "~/plugins/aos",
      ssr: false
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  auth: {
    cookie: {
      options: {
        sameSite: 'lax',
      },
    },
  },
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // dark: true,
      themes: {
        light: {
          success: '#48a5e2',
          cancel: '#757575',
          primary: colors.blue.darken2,
        },
        dark: {
          // primary: colors.blue.darken2,
          // accent: colors.grey.darken3,
          // secondary: colors.amber.darken3,
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3
        }
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  // target: 'static'
}
