<template>
  <div class="main-div">
    <h1 class="title acorn text-header">
      {{ t("contact.title") }}
    </h1>
    <h2 class="header">
      {{ t("contact.header") }}
    </h2>

    <div
      class="w-full flex flex-col lg:flex-row justify-center items-start gap-8 max-w-5xl mx-auto px-4 pb-24"
    >
      <!-- Contact Form Card -->
      <div class="w-full lg:w-3/5">
        <div class="contact-card">
          <ContactForm />
        </div>
      </div>

      <!-- Alternative Contact Methods Card -->
      <div class="w-full lg:w-2/5">
        <div class="contact-card flex flex-col items-center text-center">
          <h3 class="text-header acorn text-2xl font-bold mb-3">
            {{ t("contact.alternativeTitle") }}
          </h3>
          <p
            class="text-color-text font-medium text-sm mb-6 whitespace-pre-line"
          >
            {{ t("contact.alternativeDescription") }}
          </p>

          <nav aria-label="Social Media Links" class="w-full">
            <ul class="flex flex-col gap-3 w-full">
              <li v-for="social in socials" :key="social.name">
                <NuxtLink
                  :to="social.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                  :aria-label="`Go to ${social.name} profile`"
                >
                  <component
                    :is="social.logo"
                    class="w-5 h-5 shrink-0"
                    aria-hidden="true"
                    :fontControlled="false"
                  />
                  <span class="text-color-text font-medium text-sm">
                    {{ social.name }}
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactForm from "~/components/contact/ContactForm.vue";
const { t } = useI18n();

const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yusufonaran/",
    logo: "SvgoLinkedin",
  },
  {
    name: "GitHub",
    link: "https://github.com/onaranyusuf",
    logo: "SvgoGithub",
  },
  {
    name: "Email",
    link: "mailto:hello@yusufonaran.com",
    logo: "SvgoMail",
  },
];

useSeoMeta({
  title: "Contact – Yusuf Onaran | Fullstack Developer",
  description: "Contact with Yusuf Onaran.",
  author: "Yusuf Onaran",
});

const schemaContactPage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact – Yusuf Onaran",
  description: "Contact with Yusuf Onaran.",
  url: "https://portfolio-template.yusufonaran.com/contact",
  inLanguage: "en-US",
};

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://portfolio-template.yusufonaran.com/contact",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(schemaContactPage),
    },
  ],
});
</script>

<style scoped>
@reference "~/assets/css/main.css";
@font-face {
  font-family: "Acorn";
  src: url("/assets/fonts/Acorn/Acorn-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
}

.acorn {
  font-family: "Acorn", sans-serif;
}

.main-div {
  @apply w-full pt-16 md:pt-24 mt-6 transition-colors duration-300 relative z-1;
}

.title {
  @apply text-center align-top font-bold text-5xl mb-2;
}

.header {
  @apply text-base font-light text-center text-gray-800 dark:text-gray-700 mb-4;
}

.contact-card {
  @apply rounded-lg p-6 md:p-8 transition-colors duration-300;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 var(--card-bg);
}

.social-link {
  @apply flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 16px -8px var(--card-bg);
}

.social-link:hover {
  @apply -translate-y-0.5;
  box-shadow: 0 8px 24px -6px var(--card-bg);
}

.gs-logo {
  @apply fixed bottom-5 right-1 md:top-4 md:left-4 w-6 md:w-8 h-auto opacity-70;
}
</style>
