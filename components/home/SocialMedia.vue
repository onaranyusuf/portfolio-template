<template>
  <div class="flex items-center justify-center gap-6 sm:gap-10 my-7 z-10">
    <NuxtLink v-for="social in socials" :key="social.name" :href="social.link" target="_blank" rel="noopener noreferrer"
      class="flex items-center justify-center cursor-pointer text-gray-600 hover:text-gray-800 dark:text-gray-700 dark:hover:text-gray-900 transition-colors duration-300"
      :aria-label="`Go to ${social.name} profile`">
      <component :is="social.logo" class="social-item w-6 h-6" aria-hidden="true" :fontControlled="false" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface Social {
  name: string;
  link: string;
  logo: string;
}

const socials: Social[] = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yusufonaran/',
    logo: 'SvgoLinkedin',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/onaranyusuf',
    logo: 'SvgoGithub',
  },
];
</script>