<template>
  <v-app-bar app class="appBar" :density="scrolled ? 'compact' : 'comfortable'" :flat="!scrolled" :color="scrolled ? 'blur' : 'transparent'">
    <template v-slot:prepend>
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="showDrawer = !showDrawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      <v-icon icon="mdi-code-braces-box" />
      My Portfolio
    </v-app-bar-title>
    <v-spacer/>

    <v-toolbar-items class="hidden-xs">
      <v-btn v-for="link in links" variant="plain" class="text-capitalize"
        :key="link.path"
        :to="`#section-${link.path}`"
        @click.prevent="scrollTo(link.path)"
      >
        {{ link.title }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
  <v-navigation-drawer
    v-model="showDrawer"
    temporary
  >
    <v-list :items="links" />
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showDrawer = ref(false);
const scrolled = ref(false);

document.addEventListener("scroll", () => scrolled.value = window.scrollY > 50)

const scrollTo = (refName: string) => {
  //TODO No deberia ser por este metodo. Solo con el link deberia funcionar.
  const element = document.getElementById(`section-${refName}`);
  console.log(element);
  element?.scrollIntoView({ behavior: "smooth" });
}

const links = ref([
  {
    'title': 'About',
    'path': 'about',
  },
  {
    'title': 'Skills',
    'path': 'skills',
  },
  {
    'title': 'Projects',
    'path': 'projects',
  },
  {
    'title': 'Contact',
    'path': 'contact',
  },
]);
</script>
<style scoped>
  .v-toolbar {
    transition-property: background, box-shadow, height, border-radius;
    transition-duration: 0.2s;
    transition-timing-function: linear;
  }

  .bg-blur {
    background-color: rgb(255 255 255/0.5)!important;
    backdrop-filter: blur(14px);
  }
</style>
