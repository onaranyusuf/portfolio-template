<template>
  <div class="project-card relative group">
    <div class="w-full aspect-video relative rounded-lg overflow-hidden card">
      <div
        v-if="!isImageLoaded"
        class="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center"
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

      <!-- Desktop -->
      <div
        class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center gap-8"
      >
        <NuxtLink
          :href="item.link"
          target="_blank"
          external
          class="flex flex-col items-center gap-2 text-white hover:text-gray-500 transition-colors"
        >
          <GlobeAltIcon class="w-7 h-7" />
        </NuxtLink>

        <NuxtLink
          v-if="item.github"
          :href="item.github"
          target="_blank"
          external
          class="flex flex-col items-center gap-2 text-white hover:text-gray-500 transition-colors"
        >
          <SvgoGithub style="width: 22px; height: 22px;" />
        </NuxtLink>
      </div>

      <!-- Mobile -->
      <div class="absolute bottom-2 right-2 flex gap-2 md:hidden">
        <NuxtLink
          :href="item.link"
          target="_blank"
          external
          class="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
        >
          <GlobeAltIcon class="w-5 h-5 text-gray-600" />
        </NuxtLink>

        <NuxtLink
          v-if="item.github"
          :href="item.github"
          target="_blank"
          external
          class="bg-white/20 backdrop-blur-sm px-2 py-2 rounded-full text-white hover:bg-white/30 transition-colors"
        >
          <SvgoGithub style="width: 18px; height: 18px;" class="text-gray-600"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { GlobeAltIcon } from '@heroicons/vue/24/outline'

const isImageLoaded = ref(false);

defineProps({
  item: {
    type: Object as PropType<{
      name: string;
      image: string;
      link: string;
      github?: string;
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
