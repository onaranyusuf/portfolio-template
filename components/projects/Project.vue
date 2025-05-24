<template>
  <NuxtLink
    :to="item.link"
    target="_blank"
    class="w-1/3 card rounded-lg p-2 relative group"
    aria-label="Go to project"
  >
    <span class="sr-only">Go to project</span>
    <div class="w-full aspect-video relative rounded-lg overflow-hidden">
      <div
        v-if="!isImageLoaded"
        class="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center"
        aria-hidden="true"
      >
        <div class="text-gray-500 text-sm">Loading...</div>
      </div>
      <NuxtImg
        loading="lazy"
        :src="item.image"
        :alt="item.name"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        :class="{ 'opacity-0': !isImageLoaded, 'opacity-100': isImageLoaded }"
        @load="handleImageLoad"
        @error="handleImageError"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const isImageLoaded = ref(false);

defineProps({
  item: {
    type: Object as PropType<{
      name: string;
      image: string;
      link: string;
    }>,
    required: true,
  },
});

const handleImageLoad = (): void => {
  isImageLoaded.value = true;
};

const handleImageError = (): void => {
  isImageLoaded.value = true;
};
</script>
