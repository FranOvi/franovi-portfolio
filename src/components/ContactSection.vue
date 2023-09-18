<template>
  <v-container class="py-16">
    <h2>Contact Me</h2>
    <v-row dense>
      <v-col cols="12" md="6">
        <v-list lines="one" bg-color="background" density="comfortable">
          <v-list-item class="py-4" href="tel:50584007149" title="Phone" subtitle="(+505) 8400-7149">
            <template v-slot:prepend>
              <v-avatar color="primary">
                <v-icon color="white">mdi-phone</v-icon>
              </v-avatar>
            </template>
          </v-list-item>

          <v-list-item class="py-4" href="mailto:franciscoviedojr@gmail.com" title="Email" subtitle="franciscoviedojr@gmail.com">
            <template v-slot:prepend>
              <v-avatar color="primary">
                <v-icon color="white">mdi-email</v-icon>
              </v-avatar>
            </template>
          </v-list-item>
          <v-list-item class="py-4" href="https://www.google.com/maps?q=managua+nicaragua" title="Location" subtitle="Managua, Nicaragua (CST-6)">
            <template v-slot:prepend>
              <v-avatar color="primary">
                <v-icon color="white">mdi-map-marker</v-icon>
              </v-avatar>
            </template>
          </v-list-item>
        </v-list>
        <SimpleGoogleMap msg="Hello" :zoom="12" :lat="12.1311784" :lng="-86.2547645" />
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="mx-auto" color="background">
          <v-card-text>
            <p class="my-4">Please fill out the form on this section to contact with me.</p>

            <v-row >
              <v-col cols="12" md="6">
                <v-text-field label="First name" variant="outlined" hide-details required />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Last name" variant="outlined" hide-details required />
              </v-col>
              <v-col cols="12">
                <v-text-field label="Phone" variant="outlined" hide-details required />
              </v-col>
              <v-col cols="12">
                <v-textarea label="Write your message" variant="outlined" hide-details required />
              </v-col>
              <v-col>
                <v-btn class="text-capitalize" color="error" variant="flat">
                  Let's talk
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container fluid tag="section" id="section-footer" class="bg-dark py-10 ma-0 pa-0 d-flex align-center">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <p>Francisco Jose Oviedo Juarez</p>
          <p>(+505) 8400-7149</p>
          <p>Email franciscoviedojr@gmail.com</p>
        </v-col>
        <v-col cols="12" md="6">
          <p>My projects</p>
          <p>My blog</p>
          <p>Download curriculum / resume</p>
        </v-col>
        <v-col>
          <p>linked in | torre | github | gitlab | stackoverflow</p>
          <p>Developed by Francisco Oviedo © 2023</p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts" setup>
import SimpleGoogleMap from '@/components/SimpleGoogleMap.vue'
</script>
