<template>
  <Html lang="en">
    <Background />
    <Navbar />
    <NuxtPage />
    <Footer />
    <SpeedInsights />
    <Analytics />
  </Html>
</template>

<script setup lang="ts">
import Footer from "~/components/layout/Footer.vue";
import Background from "~/components/layout/Background.vue";
import Navbar from "~/components/layout/Navbar.vue";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
import { Analytics } from '@vercel/analytics/nuxt'
</script>
