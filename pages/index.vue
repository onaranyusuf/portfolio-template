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
    "Yusuf Onaran, Onaran Yusuf, Onaran, onaranyusuf, yusufonaran, onaran, Fullstack Developer, Vue.js, Nuxt.js, React, TypeScript, JavaScript, Node.js, Web Developer",
  author: "Yusuf Onaran",
  ogImage: "https://www.yusufonaran.com/og.png",
  ogImageWidth: "1200",
  ogImageHeight: "630",
  twitterCard: "summary_large_image",
  twitterImage: "https://www.yusufonaran.com/og.png",
});

const schemaPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yusuf Onaran",
  url: "https://www.yusufonaran.com",
  jobTitle: "Fullstack Developer",
  description:
    "Fullstack Developer with a passion for crafting digital experiences",
  knowsAbout: [
    "Vue.js",
    "Nuxt.js",
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
  ],
  sameAs: [
    "https://github.com/onaranyusuf",
    "https://www.linkedin.com/in/yusufonaran/",
  ],
};

const schemaWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Yusuf Onaran – Fullstack Developer",
  description:
    "Yusuf Onaran is a passionate fullstack developer specializing in Vue.js, Nuxt.js, React, and modern web technologies.",
  url: "https://www.yusufonaran.com",
  inLanguage: "en-US",
};

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://www.yusufonaran.com",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "icon",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(schemaPerson),
    },
  ],
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://www.yusufonaran.com",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "icon",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(schemaWebPage),
    },
  ],
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
