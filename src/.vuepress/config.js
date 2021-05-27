const { description } = require('../../package')

module.exports = {
  theme: "book",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Arthur Pinier',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,

  },

  themeConfig: {
  navbar: true,
  displayAllHeaders: true,
  sidebar: [
    '/',
        {
      title: 'Projects ',   // required
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1,    // optional, defaults to 1
      children: [
        '/projets/laguna',
        '/projets/tecnyx',
        '/projets/innkeeper',
        '/projets/opensource',

      ]
    },
    '/competences/',
    '/formations/',

  ]
},

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
