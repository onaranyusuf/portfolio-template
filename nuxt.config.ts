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
  modules: ["@nuxtjs/i18n", "@nuxtjs/color-mode"],
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
});