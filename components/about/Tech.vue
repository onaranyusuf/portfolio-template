<template>
  <div class="head-div mb-12">
    <h2 class="title acorn text-header">
      {{ t("about.tech.title") }}
    </h2>

    <div class="group">
      <div class="logos-viewport mask">
        <div class="logos-track">
          <div
            v-for="tech in [...techStack, ...techStack]"
            :key="`tech-${tech.id}`"
            class="logo-item"
          >
            <Icon :name="tech.icon" class="slide-image tech-icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TechItem {
  id: number;
  name: string;
  icon: string;
}

const { t } = useI18n();

const techStack: TechItem[] = [
  { id: 1, name: "Vue.js", icon: "logos:vue" },
  { id: 2, name: "Nuxt.js", icon: "logos:nuxt-icon" },
  { id: 3, name: "React", icon: "logos:react" },
  { id: 4, name: "TypeScript", icon: "logos:typescript-icon" },
  { id: 5, name: "JavaScript", icon: "logos:javascript" },
  { id: 6, name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
  { id: 7, name: "Node.js", icon: "logos:nodejs-icon" },
  { id: 8, name: "Express", icon: "devicon:express" },
  { id: 9, name: "Python", icon: "logos:python" },
  { id: 10, name: "MongoDB", icon: "devicon:mongodb" },
  { id: 11, name: "Git", icon: "logos:git-icon" },

];
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

.head-div {
  @apply w-full transition-colors duration-300 relative z-1 px-8 lg:px-32 mt-2 lg:mt-6;
}

.title {
  @apply text-start align-top font-bold text-3xl text-gray-800 dark:text-gray-700 mb-4;
}

.logos-viewport {
  @apply w-full overflow-hidden relative flex;
}

.logos-track {
  @apply flex whitespace-nowrap;
  animation: marquee 35s linear infinite;
}

.logo-item {
  @apply flex-shrink-0 w-16 sm:w-20 md:w-24 lg:w-28 p-4;
  @apply transition-transform duration-500 ease-in-out;
}

.logo-item:hover {
  @apply -translate-y-2;
}

.tech-icon {
  @apply w-full h-12 object-contain;
}

.slide-image {
  @apply w-full aspect-square bg-contain bg-no-repeat bg-center;
}

.mask {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    black 60px,
    black calc(100% - 60px),
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0,
    black 60px,
    black calc(100% - 60px),
    transparent 100%
  );
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
