<template>
  <v-container class="py-10" id="section-projects">
    <h2>Featured Projects</h2>


    <v-sheet class="py-14">
      <v-row>
        <v-col cols="12" sm="6">
          <p class="text-medium-emphasis mb-2">
            01
          </p>
          <h3 class="font-weight-medium text-h4">
            Vital PBX Voices
          </h3>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="text-right mb-2">
            <v-chip class="me-2">
              Laravel
            </v-chip>
            <v-chip class="me-2">
              Vue
            </v-chip>
          </div>
          <p class="text-body-2">
            Collaborative translation tool to help in the translation of vital pbx phone prompts. It has support for multiple roles and permissions, allowing the community to vote and flag content.
          </p>
        </v-col>
      </v-row>
      <v-img aspect-ratio="4/3" lazy-src="/projects/vitalpbx/voices-preview-lazy.jpg" src="/projects/vitalpbx/voices-preview.jpg" class="hover-overlay rounded-xl mt-6 mx-md-10" cover>
        <div class="hover-overlay-content text-white d-flex align-center justify-center">
          <div class="mr-2 text-h5">Read More</div>
          <v-icon size="x-large" icon="mdi-open-in-new"/>
        </div>
      </v-img>
    </v-sheet>
    <v-sheet class="py-14">
      <v-row>
        <v-col cols="12" sm="6">
          <p class="text-medium-emphasis mb-2">
            02
          </p>
          <h3 class="font-weight-medium text-h4">
            HealthPrevent
          </h3>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="text-right mb-2">
            <v-chip class="me-2">
              Laravel
            </v-chip>
            <v-chip class="me-2">
              Vue
            </v-chip>
            <v-chip class="me-2">
              Api
            </v-chip>
          </div>
          <p class="text-body-2">
            Platform that aggregates and analyses clinical data, finds risk factors to provide patient-specific evidence-based recommendations to reduce risks and become healthier.
          </p>
        </v-col>
      </v-row>
      <v-img aspect-ratio="4/3" lazy-src="/projects/healthier/healthier-2-preview-lazy.jpg" src="/projects/healthier/healthier-2-preview.jpg" class="hover-overlay rounded-xl mt-6 mx-md-10" cover>
        <div class="hover-overlay-content text-white d-flex align-center justify-center">
          <div class="mr-2 text-h5">Read More</div>
          <v-icon size="x-large" icon="mdi-open-in-new"/>
        </div>
      </v-img>
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
</script>
<style>
.hover-overlay {
  position: relative;
}

.hover-overlay.v-img > .v-responsive__content > .hover-overlay-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: .5s ease;
  opacity: 0;
}

.hover-overlay:hover.v-img > .v-responsive__content > .hover-overlay-content {
  opacity: 1;
}

.hover-overlay.v-img > .v-img__img {
  transition-duration: 0.28s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-overlay:hover.v-img > .v-img__img {
  transform: scale(1.04);
}
</style>
