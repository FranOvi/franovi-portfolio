<template>
  <v-app-bar app class="appBar" :density="scrolled ? 'compact' : 'comfortable'" :flat="!scrolled"
    :color="scrolled ? (theme.global.current.value.dark ? 'blur-dark': 'blur') : 'transparent'">
    <template v-slot:prepend>
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="showDrawer = !showDrawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      <svg width="34" height="20"><use xlink:href="/logo-mono.svg#logo" style="vertical-align: text-top;" :style="{fill: theme.current.value.colors['on-surface']}"></use></svg>
      <!-- <span class="ml-2" style="vertical-align: text-bottom;">FranOvi</span> -->
    </v-app-bar-title>
    <v-spacer/>

    <v-toolbar-items class="hidden-xs">
      <v-btn v-for="link in links" variant="plain" class="text-capitalize"
        :key="link.path"
        :href="`#${link.path}`"

      >
        {{ link.title }}
      </v-btn>
      <v-btn @click="toggleTheme" :icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'" variant="tonal" rounded="x-large"></v-btn>
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
import { useTheme } from 'vuetify'

const theme = useTheme();
const toggleTheme = () => {
  const setTheme = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme';
  theme.global.name.value = setTheme;
  localStorage.setItem('theme', setTheme);
};

const showDrawer = ref(false);
const scrolled = ref(false);

document.addEventListener("scroll", () => scrolled.value = window.scrollY > 50)

const links = ref([
  {
    'title': 'Home',
    'path': 'section-home',
  },
  {
    'title': 'About',
    'path': 'section-about',
  },
  {
    'title': 'Skills',
    'path': 'section-skills',
  },
  {
    'title': 'Projects',
    'path': 'section-projects',
  },
  {
    'title': 'Contact',
    'path': 'section-contact',
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

  .bg-blur-dark {
    background-color: rgb(17 24 39/0.5)!important;
    backdrop-filter: blur(14px);
  }
</style>
