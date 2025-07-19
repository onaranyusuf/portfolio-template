import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
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
    "@nuxtjs/robots",
    "nuxt-og-image"
  ],

  site: {
    url: "https://yusufonaran.com",
    name: "Yusuf Onaran ",
    description: "Yusuf Onaran's personal website"
  },

  sitemap: {
    defaults: {
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    },
    urls: [
      {
        loc: '/',
        changefreq: 'monthly', 
        priority: 0.9,
        lastmod: '2025-07-19',
      },
      {
        loc: '/about',
        changefreq: 'yearly',
        priority: 0.8,
        lastmod: '2025-07-19',
      },
      {
        loc: '/projects',
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: '2025-07-19',
      },
      {
        loc: '/contact',
        changefreq: 'yearly',
        priority: 0.7,
        lastmod: '2025-07-19',
      }
    ],
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
      { label: 'Change Frequency', select: 'sitemap:changefreq', width: '12.5%' },
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