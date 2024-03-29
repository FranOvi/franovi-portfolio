<template>
  <v-container class="py-16" id="section-contact">
    <h2>Contact Me</h2>
    <v-row dense>
      <v-col cols="12" lg="6">
        <v-list lines="one" bg-color="background" density="comfortable">
          <v-list-item class="py-4" href="tel:+50584007149" title="Phone" subtitle="(+505) 8400-7149">
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
      <v-col cols="12" lg="6">
        <v-card class="mx-auto pa-4 rounded-xl" color="surface-variation" elevation="16">
          <v-card-text>
            <p class="my-4">You can fill out this form to contact with me.</p>
            <v-form ref="formRef" @submit.prevent="sendMessage">
              <v-row >
                <v-col cols="12" sm="6">
                  <v-text-field v-model="form.firstName" label="First name" variant="outlined" hide-details="auto" required />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="form.lastName" label="Last name" variant="outlined" hide-details="auto" required />
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="form.email" :rules="emailRules" label="Email" variant="outlined" hide-details="auto" required />
                </v-col>
                <v-col cols="12">
                  <v-textarea v-model="form.message" :rules="messageRules" label="Write your message" variant="outlined" hide-details="auto" required />
                </v-col>
                <v-col>
                  <v-btn type="submit" :loading="isLoading" class="text-capitalize" color="error" variant="flat" rounded>
                    Send message
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar.show" :timeout="2000" :color="snackbar.color" rounded="pill">
      {{ snackbar.message }}
      <template v-slot:actions>
        <v-btn variant="text" @click="snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { VForm } from 'vuetify/components';
import SimpleGoogleMap from '@/components/SimpleGoogleMap.vue'

const formRef = ref<null | VForm>(null);
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
});
const isLoading = ref(false);
const snackbar = ref({
  show: false,
  message: '',
  color: 'primary'
})

onMounted(async () => {
  let data: any = {};
  if (localStorage.getItem('identifier-uuid') === null) {
    const response = await fetch('https://ipapi.co/json/');
    const resData = response.ok ? await response.json() : null;
    const urlParams = new URLSearchParams(window.location.search);
    data = {
      ipAddress: fromStorage('identifier-ipaddress', resData?.ip),
      country: fromStorage('identifier-country', resData ? (resData?.country_code_iso3 + ' - ' + resData?.country_name) : ''),
      userAgent: fromStorage('identifier-userAgent', navigator.userAgent),
      trackSource: fromStorage('identifier-source', urlParams.get('source') ?? ''),
      timezone: fromStorage('identifier-timezone', Intl.DateTimeFormat().resolvedOptions().timeZone)
    }
  }
  data['uuid'] = fromStorage('identifier-uuid', crypto.randomUUID());

  fetch('https://script.google.com/macros/s/AKfycbx_s6QiXl6sOA4rxk3DFeg-41uQA8rIWXzeqfeZoMH2t_5hYyoZpM8Mj6B3LKV8XN9AvQ/exec?form=activity', {
    method: "POST",
    body: JSON.stringify(data),
  })
});

const fromStorage = (key: string, defaultVal: string) => {
  let value = localStorage.getItem(key);
  if (value) return value;
  localStorage.setItem(key, defaultVal);
  return defaultVal;
}

const sendMessage = async () => {
  isLoading.value = true;
  const validate = await formRef.value?.validate();
  if (!validate?.valid) return isLoading.value = false;

  fetch('https://script.google.com/macros/s/AKfycbx_s6QiXl6sOA4rxk3DFeg-41uQA8rIWXzeqfeZoMH2t_5hYyoZpM8Mj6B3LKV8XN9AvQ/exec?form=message', {
    method: "POST",
    body: JSON.stringify(form.value),
  }).then(() => {
    showSnackbar('success', 'Thanks for contacting me!. Your message was sent succesfully.');
    formRef.value?.reset();
  }).catch(() => {
    showSnackbar('error', 'An error ocurred when sending the message.');
  }).finally(() => {
    isLoading.value = false;
  })
}

const showSnackbar = (color: string, message: string) => {
  snackbar.value.message = message;
  snackbar.value.color = color;
  snackbar.value.show = true;
}

const messageRules = [
  (value: string) => {
    if (value) return true
    return 'Message is required.'
  },
];
const emailRules = [
  (value: string) => {
    if (value) return true
    return 'E-mail is required.'
  },
  (value: string) => {
    if (/.+@.+\..+/.test(value)) return true
    return 'E-mail must be valid.'
  },
];
</script>
