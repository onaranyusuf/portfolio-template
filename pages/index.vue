<template>
  <div class="min-h-screen flex flex-col items-center justify-center transition-colors duration-300 relative z-1">
    <div class="m-5">
      <NuxtImg loading="lazy" class="rounded-full h-28 w-28 object-cover" src="/assets/yusuf.png"
        alt="Yusuf - Web Developer Portrait Photo" />
    </div>
    <div>
      <h1 class="text-center align-top tracking-wider font-bold text-5xl text-header mb-5 acorn">
        {{ t('index.greeting') }}
      </h1>
    </div>
    <div>
      <h3 class="text-color-text font-medium text-center">
        {{ t('index.about') }}
      </h3>
    </div>
    <div>
      <SocialMedia class="z-1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SocialMedia from '~/components/home/SocialMedia.vue'

const { t } = useI18n()
</script>

<style scoped>
@font-face {
  font-family: "Acorn";
  src: url("/assets/fonts/Acorn/Acorn-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
}

.acorn {
  font-family: 'Acorn', sans-serif;
}
</style>
