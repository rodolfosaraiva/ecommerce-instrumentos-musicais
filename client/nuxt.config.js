require('dotenv').config()

const polyfills = [
  'Promise',
  'Object.assign',
  'Object.values',
  'Array.prototype.find',
  'Array.prototype.findIndex',
  'Array.prototype.includes',
  'String.prototype.includes',
  'String.prototype.startsWith',
  'String.prototype.endsWith'
]

module.exports = {
  mode: 'ssr',
  srcDir: __dirname,

  env: {
    appUrl: process.env.APP_URL,
    appName: process.env.APP_NAME,
    appLocale: process.env.APP_LOCALE || 'en'
  },

  head: {
    title: process.env.APP_NAME,
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'pt-br'
    },    
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: 'UltraSom - Loja virtual para compras de instrumentos e acessórios musicais.' }
    ],
    link: [
      { rel: "shortcut icon", href: "/favicon/icon-32x32.png" },
      { rel: "icon", type: "image/png", href: "/favicon/icon-32x32.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "57x57", href: "/favicon/apple-touch-icon-iphone.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "72x72", href: "/favicon/apple-touch-icon-ipad.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "114x114", href: "/favicon/apple-touch-icon-iphone-retina.png" },

      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css', integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr', crossorigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rubik:400,500,700' }     
    ],
    script: [
      { src: `https://cdn.polyfill.io/v2/polyfill.min.js?features=${polyfills.join(',')}` }
    ],
  },

  loading: { color: '#007bff' },

  css: [
    { src: '~assets/sass/app.scss', lang: 'scss'}
  ],

  plugins: [
    {src: 'plugins/owl.js', ssr: false},
    {src: 'plugins/tooltip.js', ssr: false},
    {src: 'plugins/vue-select.js', ssr: false},
    {src: 'plugins/vue-slider.js', ssr: false},
    {src: 'plugins/number.js', ssr: false},
    '~plugins/vue-js-modal',
    '~components/global',
    '~plugins/vform',
    '~plugins/focus',
    '~plugins/lazyload',
    '~plugins/axios'
  ],

  modules: [
    '@nuxtjs/router',
    '~/modules/spa',
    ['nuxt-validate', {
      lang: 'pt_BR',
    }],
    
    ['vue-scrollto/nuxt', { duration: 500, offset: -66 }],
  ],

  build: {
    extractCSS: true
  }
}
