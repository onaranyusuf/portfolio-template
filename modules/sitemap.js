import { mkdirSync, writeFileSync } from 'fs'
import { Readable } from 'stream'
import { dirname } from 'path'
import { SitemapStream, streamToPromise } from 'sitemap'
import { defineNuxtModule, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'sitemap',
    version: '0.0.1',
    configKey: 'sitemap',
    compatibility: { nuxt: '^3.0.0-rc.11' },
  },
  defaults: {
    hostname: 'https://yusufonaran.com',
  },
  async setup(options, nuxt) {
    async function generateSitemap(routes) {
      const sitemapRoutes = routes.map(route => ({
        url: route.path,
        changefreq: 'weekly',
        priority: route.path === '/' ? 1.0 : 0.8
      }))

      const stream = new SitemapStream({ hostname: options.hostname })
      return streamToPromise(Readable.from(sitemapRoutes).pipe(stream)).then(data =>
        data.toString()
      )
    }

    function createSitemapFile(sitemap, filepath) {
      const dirPath = dirname(filepath)
      mkdirSync(dirPath, { recursive: true })
      writeFileSync(filepath, sitemap)
    }

    nuxt.hook('nitro:build:public-assets', async (nitro) => {
      const routes = nuxt.apps.default?.router?.getRoutes?.() || []
      const pages = routes.filter(route => !route.path.includes(':'))
        .map(route => ({ path: route.path }))
      
      if (pages.length === 0) {
        const manualRoutes = ['/', '/about', '/contact', '/projects']
        pages.push(...manualRoutes.map(path => ({ path })))
      }

      const sitemap = await generateSitemap(pages)
      const filePath = `${nitro.options.output.publicDir}/sitemap.xml`
      createSitemapFile(sitemap, filePath)
      console.log('✅ Sitemap oluşturuldu:', filePath)
    })
  },
})