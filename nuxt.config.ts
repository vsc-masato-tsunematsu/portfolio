import NuxtConfiguration, {} from '@nuxt/config'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/portfolio/'
  }
} : {}

const config: NuxtConfiguration = {
  // Type or Press `Ctrl + Space` for autocompletion
  mode: 'universal',
  head: {
    title: 'Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My awe-inspiring brilliant cool dignified excellent fabulous godlike portfolio.' }
    ]
  },
  css: [
    '~/assets/bulma.scss',
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  ...routerBase
}

export default config
