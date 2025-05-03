<template>
    <div class="fixed bottom-0 left-0 m-5">
      <LanguageSelector />
    </div>
    <div class="fixed bottom-0 right-0 m-5">
        <ThemeSelector />
        
    </div>
</template>

<script setup lang="ts">
import ThemeSelector from '~/components/ThemeSelector.vue';
import LanguageSelector from '~/components/LanguageSelector.vue'
</script>