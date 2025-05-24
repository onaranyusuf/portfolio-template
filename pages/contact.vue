<template>
  <div class="main-div">
    <h1 class="title text-header acorn">
      {{ t("contact.title") }}
    </h1>
    <ContactForm class="mx-auto" />
    <img :src="GS" alt="galatasaray logo" class="gs-logo" />
  </div>
</template>

<script setup lang="ts">
import ContactForm from "~/components/contact/ContactForm.vue";
import GS from "~/assets/images/gs.webp";

const { t } = useI18n();
</script>

<style scoped>
@reference "~/assets/css/main.css";
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

.gs-logo {
  @apply fixed bottom-5 right-1 md:top-4 md:left-4  w-6 md:w-8 h-auto opacity-70;
}
</style>
