<template>
  <v-container class="py-16" id="section-projects">
    <h2>Featured Projects</h2>
    <v-row class="mt-4">
      <v-col cols="12" lg="6" xl="4">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="hover-translate" rounded="xl" color="surface-variation" :elevation="isHovering ? 16 : 4" v-bind="props">
            <v-img src="/projects/vitalpbx/voices-preview.jpg"
              class="ma-4 rounded-lg" height="200px" cover />

            <v-card-title>
              Vital PBX Voices
            </v-card-title>

            <v-card-text>
              <div class="mb-2">
                <v-chip class="me-2">
                  Laravel
                </v-chip>
                <v-chip class="me-2">
                  Vue
                </v-chip>
              </div>
              1,000 miles of wonder
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" lg="6" xl="4">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="hover-translate" rounded="xl" color="surface-variation" :elevation="isHovering ? 8 : 2" v-bind="props">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              class="ma-4 rounded-lg" height="200px" cover />

            <v-card-title>
              Vital PBX Voices
            </v-card-title>

            <v-card-text>
              <div class="mb-2">
                <v-chip class="me-2">
                  Laravel
                </v-chip>
                <v-chip class="me-2">
                  Vue
                </v-chip>
              </div>
              1,000 miles of wonder
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-btn class="mt-8" color="primary">
      Show project
      <v-dialog activator="parent" width="80vw" scrollable>
        <v-card>
          <v-card-text>
            <v-carousel show-arrows="hover" hide-delimiters d height="750px">
              <v-carousel-item src="/projects/vitalpbx/voices-1.jpg" cover />
              <v-carousel-item src="/projects/vitalpbx/voices-2.jpg" cover />
              <v-carousel-item src="/projects/vitalpbx/voices-3.jpg" cover />
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-btn>
  </v-container>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
</script>
<style>
.hover-translate {
  transition-duration: 0.28s;
  transition-property: box-shadow, opacity, background, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-translate:hover {
  transform: translateY(-20px);
}
</style>
