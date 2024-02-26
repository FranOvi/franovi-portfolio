<template>
  <AboutSection />
  <FeaturedProjectsSection />
  <SkillsSection />
  <ContactSection />
  <FooterComponent />
</template>

<script lang="ts" setup>
  import AboutSection from '@/components/AboutSection.vue'
  import FeaturedProjectsSection from '@/components/FeaturedProjectsSection.vue';
  import ContactSection from '@/components/ContactSection.vue';
  import SkillsSection from '@/components/SkillsSection.vue'
  import FooterComponent from '@/components/FooterComponent.vue';
</script>
<style>
  html {
    scroll-behavior: smooth;
  }
  ::selection {
    color: white;
    background: #353454;
  }
</style>
