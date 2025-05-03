<script setup lang="ts">
const { locale: current, setLocaleCookie } = useI18n();

const locales = [
  { code: "en", name: "English" },
  { code: "tr", name: "Turkish" },
];

const currentLocale = computed(() => {
  return locales.find((locale) => locale.code === current.value);
});

watch(current, (newLocale) => {
  setLocaleCookie(newLocale);
});
</script>

<template>
  <div class="z-99 flex items-center gap-3 rounded-lg px-3 py-1 backdrop-blur-xl card-nav">
    <ClientOnly>
      <div v-for="locale in locales" :key="locale" class="cursor-pointer select-none" @click="$i18n.locale = locale.code">
        <span class="font-semibold" :class="locale.code === currentLocale?.code ? 'text-primary-color' : 'text-primary-color/50'">
          {{ locale.code }}
        </span>
      </div>
    </ClientOnly>
  </div>
</template>