<script setup lang="ts">
const { locale: current, setLocale } = useI18n();

const locales: { code: "tr" | "en"; name: string }[] = [
  { code: "en", name: "English" },
  { code: "tr", name: "Turkish" },
];
</script>

<template>
  <div class="overflow-hidden rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/30 shadow-sm flex items-center">
    <ClientOnly>
      <button
        v-for="locale in locales" 
        :key="locale.code"
        @click="setLocale(locale.code)"
        class="px-2.5 py-1 text-xs font-medium transition-colors duration-200 cursor-pointer"
        :class="locale.code === current 
          ? 'bg-gray-100/70 dark:bg-gray-500/50 text-gray-800 dark:text-gray-200' 
          : 'text-gray-400 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'"
      >
        {{ locale.code.toUpperCase() }}
      </button>
    </ClientOnly>
  </div>
</template>