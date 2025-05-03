<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
import { useColorMode } from '#imports';

const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
};
</script>

<template>
  <div @click="toggleColorMode" class="flex items-center gap-2 cursor-pointer select-none">
    <component :is="colorMode.value === 'light' ? SunIcon : MoonIcon"
      class="w-5 h-5 text-gray-600 dark:text-gray-300 transition-colors duration-300" />
  </div>
</template>
