<template>
  <div class="main-div">
    <h1 class="title acorn text-header">
      {{ t("about.title") }}
    </h1>
    <div class="w-full flex-col justify-center items-center flex lg:hidden">
      <div class="rounded-lg card-img p-3 w-10/12 m-10">
        <NuxtImg
          loading="lazy"
          class="rounded-lg w-full object-cover z-20"
          src="/assets/yusuf.webp"
          alt="Yusuf - Web Developer Portrait Photo"
        />
      </div>
      <div class="w-full mb-10">
        <div>
          <p class="text-color-text font-medium text-start px-8 mb-8 whitespace-pre-line">
            {{ t("about.header") }}
          </p>
        </div>
        <Tech />
      </div>
    </div>

    <div class="w-full flex-row justify-between hidden lg:flex">
      <div class="w-[65%] my-5 lg:my-10">
        <div>
          <p
            class="text-color-text font-medium text-start px-20 lg:px-32 pt-5 whitespace-pre-line"
          >
            {{ t("about.header") }}
          </p>
        </div>
        <Tech />

      </div>
      <div class="w-[30%] my-10">
        <div class="rounded-bl-lg rounded-tl-lg card-img p-5 pr-0">
          <NuxtImg
            loading="lazy"
            class="rounded-bl-lg rounded-tl-lg w-full h-fit object-cover z-20"
            src="/assets/yusuf.webp"
            alt="Yusuf - Fullstack Developer Portrait Photo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tech from "~/components/about/Tech.vue";
const { t } = useI18n();

useSeoMeta({
  title:       'About – Yusuf Onaran | Fullstack Developer',
  description: 'Learn more about Yusuf Onaran, a passionate fullstack developer skilled in Vue.js, Nuxt.js, React, and modern web technologies.',
  author:      'Yusuf Onaran'
})

useSchemaOrg([  
  defineWebPage({
    "@type":       'WebPage',
    name:       'About – Yusuf Onaran',
    description: 'Learn more about Yusuf Onaran, a passionate fullstack developer skilled in Vue.js, Nuxt.js, React, and modern web technologies.',
    url:        'https://yusufonaran.com/about',
    inLanguage: 'en-US'
  })
])

defineOgImageComponent('Template', {
  title: 'Yusuf Onaran',
  description: 'About Me'
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

.card-img {
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  box-shadow: 0 8px 32px 0 var(--card-bg);
  border-right: none;
}
</style>
