<template>
  <div class="main-div">
    <h1 class="title acorn text-header">
      {{ t("projects.title") }}
    </h1>
    <h2 class="header">
      {{ t("projects.header") }}
    </h2>
    <div
      class="grid md:grid-cols-2 grid-cols-1 mx-auto p-2 max-w-4xl place-items-center pb-24"
    >
      <Project
        v-for="project in projects"
        :key="project.name"
        :item="project"
        class="w-10/12 md:w-11/12 p-4 mt-8 transform hover:scale-105 transition duration-300 ease-in-out"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Project from "~/components/projects/Project.vue";
const { t } = useI18n();

const projects = [
  {
    name: "Yusuf Onaran",
    image: "/assets/yusuf-web.webp",
    link: "https://yusufonaran.com/",
    github: "https://github.com/onaranyusuf/portfolio-template",
  },
  {
    name: "Olympos Vita Nova Hotel",
    image: "/assets/vita_nova.webp",
    link: "https://olymposvitanovahotel.com/",
  },
  {
    name: "LyricsFinder - Translate",
    image: "/assets/lyrics-finder.webp",
    link: "https://lyrics-translator.netlify.app/",
    github: "https://github.com/onaranyusuf/lyrics-finder",
  },
  {
    name: "BTC Wallet Tracker",
    image: "/assets/bitcoin-wallet-tracker.webp",
    link: "https://bitcoin-wallet-tracker.netlify.app/",
    github: "https://github.com/onaranyusuf/btc-wallet-tracker",
  },
  {
    name: "Gemini Clone",
    image: "/assets/gemini-clone.webp",
    link: "https://gemini-yo.netlify.app/",
    github: "https://github.com/onaranyusuf/geminiclone",
  },
  {
    name: "Weather App",
    image: "/assets/weather.webp",
    link: "https://weather-yo.netlify.app/",
    github: "https://github.com/onaranyusuf/havadurumuapi",
  },
];

useSeoMeta({
  title: "Projects – Yusuf Onaran | Fullstack Developer",
  description:
    "A curated showcase of web applications and digital experiences by Yusuf Onaran, Fullstack Developer.",
  author: "Yusuf Onaran"
})

const schemaCollectionPage = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Projects – Yusuf Onaran",
  "description": "A curated collection of web applications and digital experiences by fullstack developer Yusuf Onaran.",
  "url": "https://yusufonaran.com/projects",
  "inLanguage": "en-US"
}

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://yusufonaran.com/projects"
    }
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(schemaCollectionPage)
    }
  ]
})
</script>

<style scoped>
@import "@/assets/css/main.css";
@font-face {
  font-family: "Acorn";
  src: url("/assets/fonts/Acorn/Acorn-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
}

.acorn {
  font-family: "Acorn", sans-serif;
}

.main-div {
  @apply w-full pt-16 md:pt-24 mt-6 transition-colors duration-300 relative z-1;
}

.title {
  @apply text-center align-top font-bold text-5xl mb-2;
}

.header {
  @apply text-base font-light text-center text-gray-800 dark:text-gray-700 mb-4;
}
</style>
