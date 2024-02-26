<template>
  <v-container class="py-10" id="section-projects">
    <h2>All Projects</h2>

    <v-row class="mt-4">
      <v-col cols="12" lg="6" xl="6">
        <v-hover v-slot="{ isHovering, props }">
          <div v-bind="props">
            <v-card class="hover-translate" :class="{'active': isHovering}" rounded="xl" :elevation="isHovering ? 8 : 2" color="surface-variation">
              <v-img src="/projects/vitalpbx/voices-preview.jpg"
                class="ma-2" style="border-radius: 18px 18px 8px 8px;" cover />

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
                Collaborative translation tool for pbx phone prompts, with multiple roles and the ability for the community to vote and flag content.
              </v-card-text>
            </v-card>
          </div>
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

.hover-translate.active {
  transform: translateY(-10px);
}

.hover-translate > .v-img > .v-img__img {
  transition-duration: 0.28s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-translate.active > .v-img > .v-img__img {
  transform: scale(1.1);
}
</style>
