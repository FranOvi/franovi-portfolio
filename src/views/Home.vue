<template>
  <AboutSection />
  <FeaturedProjectsSection />
  <SkillsSection />
  <ContactSection />
</template>

<script lang="ts" setup>
  import AboutSection from '@/components/AboutSection.vue'
  import FeaturedProjectsSection from '@/components/FeaturedProjectsSection.vue';
  import ContactSection from '@/components/ContactSection.vue';
  import SkillsSection from '@/components/SkillsSection.vue'
</script>
<style>
  html {
    scroll-behavior: smooth;
  }
</style>
