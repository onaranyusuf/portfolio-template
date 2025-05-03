<template>
  <div class="min-h-screen flex flex-col items-center justify-center transition-colors duration-300
              bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 text-center">
    <div>
      <h1 class="text-4xl font-bold underline mb-4">
        {{ t('greeting') }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
