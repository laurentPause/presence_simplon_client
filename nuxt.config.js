
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
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '@/plugins/vue-html2pdf', mode: 'client' }
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
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-pdf',
    '@nuxtjs/toast'
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
  },
  pdf: {
    /*
    * Output folder for generated pdf.
    */
    dir: '~/assets/dist',

    /*
   * Function options for page.pdf([options])
   * Read more: https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-pagepdfoptions
   */
    pdf: {
      // Change the format of the pdfs.
      format: 'A4',

      printBackground: true // Include background in pdf.
    },

    /*
   * PDF Meta configuration. (inspired by vue-meta)
   */
    meta: {
      title: 'Default PDF title',
      titleTemplate: 'Example ─ %s',

      author: 'Christian Hansen',
      subject: 'Example',

      producer: 'Example Inc.',

      // Control the date the file is created.
      creationDate: new Date(),

      keywords: ['pdf', 'nuxt']
    },

    /*
   * PDF generation routes. (expanding nuxt.generate)
   */
    routes: [
      {
        // PDF Filename
        filename: 'super-awesome-pdf.pdf',

        // Output directory for pdf.
        // Combined with 'dir' value in options. (default 'dist')
        directory: 'pdf/',

        // Route to content that should be converted into pdf.
        route: '/login',

        // Override global meta with individual meta for each pdf.
        meta: {
          title: 'Super Awesome PDF'
        }
      }
    ]
  },
  toast: {
    position: 'top-center',
    duration: 3000
  }
}
