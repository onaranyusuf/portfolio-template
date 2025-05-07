<template>
  <Html lang="en">
    <Background />
    <Navbar />
    <NuxtPage />
    <Footer />
  </Html>
</template>

<script setup lang="ts">
import Footer from "~/components/layout/Footer.vue";
import Background from "~/components/layout/Background.vue";
import Navbar from "~/components/layout/Navbar.vue";
</script>