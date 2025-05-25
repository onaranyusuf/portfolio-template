<template>
  <Background />
  <div class="main-div">
    <h1 class="title acorn text-header">
      {{ error.statusCode }}
    </h1>
    <h2 class="header">
      {{ getErrorMessage() }}
    </h2>
    <div class="max-w-md mx-auto p-6">
      <div class="text-center">
        <div class="space-y-4">
          <NuxtLink
            to="/"
            class="block w-full card bg-white/10 dark:bg-black/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/20 text-gray-800 dark:text-gray-200 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            tabindex="0"
            aria-label="Ana sayfaya dön"
          >
            {{ t("error.btn") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Background from "~/components/layout/Background.vue";
const { t } = useI18n();

interface ErrorProps {
  statusCode: number;
  statusMessage: string;
  message: string;
}

const props = defineProps<{
  error: ErrorProps;
}>();

const getErrorMessage = (): string => {
  switch (props.error.statusCode) {
    case 404:
      return t("error.title");
    case 500:
      return "Sunucu Hatası";
    case 403:
      return "Erişim Engellendi";
    default:
      return props.error.statusMessage || "Bir Hata Oluştu";
  }
};
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
  @apply w-full transition-colors duration-300 relative z-1 min-h-screen max-h-screen flex flex-col justify-center;
}

.title {
  @apply text-center align-top font-bold text-8xl md:text-9xl mb-4;
}

.header {
  @apply text-2xl md:text-3xl font-light text-center text-gray-800 dark:text-gray-700 mb-8;
}
</style>
