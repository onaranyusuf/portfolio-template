<template>
  <main
    class="min-h-screen flex flex-col items-center justify-center transition-colors duration-300 relative z-1"
  >
    <div class="m-5">
      <NuxtImg
        loading="lazy"
        class="rounded-full h-28 w-28 object-cover"
        src="/assets/yusuf.webp"
        alt="Yusuf - Web Developer Portrait Photo"
      />
    </div>
    <div>
      <h1
        class="text-center align-top tracking-wider font-bold text-5xl text-header mb-5 acorn"
      >
        {{ t("index.greeting") }}
      </h1>
    </div>
    <div>
      <h2 class="text-color-text font-medium text-center">
        {{ t("index.about") }}
      </h2>
    </div>
    <nav aria-label="Social Media Links">
      <SocialMedia class="z-1" />
    </nav>
  </main>
</template>

<script setup lang="ts">
import SocialMedia from "~/components/home/SocialMedia.vue";

const { t } = useI18n();

useSeoMeta({
  title: "Yusuf Onaran – Fullstack Developer",
  description:
    "Yusuf Onaran is a passionate fullstack developer specializing in Vue.js, Nuxt.js, React, and modern web technologies. Creating digital experiences with clean code.",
  keywords:
    "Yusuf Onaran, Fullstack Developer, Vue.js, Nuxt.js, React, TypeScript, JavaScript, Node.js, Web Developer",
  author: "Yusuf Onaran",
});

useSchemaOrg([
  defineWebPage({
    "@type": "WebPage",
    name: "Yusuf Onaran – Fullstack Developer",
    description:
      "Yusuf Onaran is a passionate fullstack developer specializing in Vue.js, Nuxt.js, React, and modern web technologies.",
    url: "https://yusufonaran.com",
    inLanguage: "en-US",
  }),
]);

defineOgImageComponent("Template", {
  title: "Yusuf Onaran",
  description: "Full Stack Developer",
});
</script>

<style scoped>
@font-face {
  font-family: "Acorn";
  src: url("/assets/fonts/Acorn/Acorn-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
}

.acorn {
  font-family: "Acorn", sans-serif;
}
</style>
