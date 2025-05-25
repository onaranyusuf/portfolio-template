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
        class="w-10/12 md:w-11/12 p-4 cursor-pointer mt-8 transform hover:scale-105 transition duration-300 ease-in-out"
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
    link: "/",
  },
  {
    name: "LyricsFinder - Translate",
    image: "/assets/lyrics-finder.webp",
    link: "https://lyrics-translator.netlify.app/",
  },
  {
    name: "BTC Wallet Tracker",
    image: "/assets/bitcoin-wallet-tracker.webp",
    link: "https://bitcoin-wallet-tracker.netlify.app/",
  },
  {
    name: "Gemini Clone",
    image: "/assets/gemini-clone.webp",
    link: "https://gemini-yo.netlify.app/",
  },
  {
    name: "Weather App",
    image: "/assets/weather.webp",
    link: "https://weather-yo.netlify.app/",
  },
  
  
  
];
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
