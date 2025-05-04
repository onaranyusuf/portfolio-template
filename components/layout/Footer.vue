<template>
  <div>
    <div class="fixed z-10 md:bottom-0 md:left-0 md:m-5 top-0 left-0 m-5 md:top-auto">
      <LanguageSelector />
    </div>
    <div class="fixed z-10 md:bottom-0 md:right-0 md:m-5 top-0 right-0 m-5 md:top-auto">
      <ThemeSelector />
    </div>
  </div>
</template>

<script setup lang="ts">
import ThemeSelector from '~/components/ThemeSelector.vue';
import LanguageSelector from '~/components/LanguageSelector.vue'
</script>