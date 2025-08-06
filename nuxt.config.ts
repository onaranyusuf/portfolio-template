import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: true,
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "nuxt-svgo",
    "@nuxt/image",
    "@nuxt/icon",
    "nuxt-gtag",
    "@nuxtjs/sitemap",
    "nuxt-schema-org"
  ],

  site: {
    url: "https://yusufonaran.com",
    name: "Yusuf Onaran",
    description: "Yusuf Onaran – Fullstack Developer"
  },

  app: {
    head: {
      meta: [
        { property: 'og:title', content: 'Yusuf Onaran – Fullstack Developer' },
        { property: 'og:site_name', content: 'Yusuf Onaran' },
        { property: 'og:image', content: 'https://yusufonaran.com/og.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Yusuf Onaran' },
        { name: 'twitter:description', content: 'Fullstack Developer' },
        { name: 'twitter:image', content: 'https://yusufonaran.com/og.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '192x192', href: '/android-chrome-192x192.png' },
      ]
    }
  },


  sitemap: {
    defaults: {
      changefreq: 'monthly',
      priority: 0.7,
    },
    urls: [
      {
        loc: '/',
        changefreq: 'monthly', 
        priority: 0.9,
        lastmod: '2025-08-06T00:00:00.000Z',
      },
      {
        loc: '/about',
        changefreq: 'yearly',
        priority: 0.8,
        lastmod: '2025-07-21T00:00:00.000Z',
      },
      {
        loc: '/projects',
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: '2025-07-21T00:00:00.000Z',
      },
      {
        loc: '/contact',
        changefreq: 'yearly',
        priority: 0.7,
        lastmod: '2025-07-21T00:00:00.000Z',
      }
    ],
  },

  gtag: {
    id: process.env.VITE_GA_ID,
    config: {
      send_page_view: true
    },
  },

  i18n: {
    defaultLocale: "en",
    langDir: "locales",
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_locale",
      fallbackLocale: "en",
      alwaysRedirect: false,
      redirectOn: "root", 
    },
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "tr",
        name: "Türkçe",
        file: "tr.json",
      },
    ],
    strategy: "no_prefix",
  },
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },
  svgo: {
    autoImportPath: './assets/logo/',
  }
});