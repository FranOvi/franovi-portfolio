<template>
  <v-container fluid tag="section" id="section-about" class="bg-main-section h-screen ma-0 pa-0 d-flex align-center">
    <v-container>
      <v-row>
        <v-col cols="7" class="mt-16">
          <p class="font-weight-bold text-dark">Hello there, I'm</p>
          <h1 class="text-h2 font-weight-bold text-dark">Francisco Oviedo</h1>
          <h4 class="text-h3 font-weight-bold mt-4 text-gradient">Mid Fullstack Developer</h4>
          <v-btn class="text-capitalize mt-8" color="error" variant="flat">
            Let's talk
          </v-btn>
        </v-col>
        <v-col cols="5" class="text-center">
          <div class="position-relative" style="width: 460px">
            <img src="src/assets/portrait.png" />
            <img src="src/assets/decorator-shape-1.svg" class="portrait-shapes" />
          </div>
        </v-col>
      </v-row>
    </v-container>

  </v-container>
  <v-container class="py-16">
    <div class="text-body-2  mb-n1">
      <p>I graduated from Universidad Centroamericana (UCA), Nicaragua, 2021, with a bachelors in Systems Engineering.</p>
      <p>I have 3 years of experience as a fullstack developer focusing on Laravel and Vue.js.</p>
      <p>I recide in Nicaragua in latin america, I'm open to work fulltime.</p>
    </div>

    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Word of the Day</div>
      <p class="text-h4 text--primary">
        be•nev•o•lent
      </p>
      <p>adjective</p>
      <div class="text--primary">
        well meaning and kindly.<br>
        "a benevolent smile"
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        variant="text"
        color="deep-purple-accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>


    <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height my-4">
      <v-btn color="primary">btn primary</v-btn>
      <v-btn color="secondary">btn secondary</v-btn>
      <v-btn color="error">btn error</v-btn>
      <v-btn color="info">btn info</v-btn>
      <v-btn color="success">btn success</v-btn>
      <v-btn color="warning">btn warning</v-btn>
    </div>

    <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height my-4">
      <v-btn variant="flat" color="primary">btn primary</v-btn>
      <v-btn variant="flat" color="secondary">btn secondary</v-btn>
      <v-btn variant="flat" color="error">btn error</v-btn>
      <v-btn variant="flat" color="info">btn info</v-btn>
      <v-btn variant="flat" color="success">btn success</v-btn>
      <v-btn variant="flat" color="warning">btn warning</v-btn>
    </div>

    <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height my-4">
      <v-btn variant="outlined" color="primary">btn primary</v-btn>
      <v-btn variant="outlined" color="secondary">btn secondary</v-btn>
      <v-btn variant="outlined" color="error">btn error</v-btn>
      <v-btn variant="outlined" color="info">btn info</v-btn>
      <v-btn variant="outlined" color="success">btn success</v-btn>
      <v-btn variant="outlined" color="warning">btn warning</v-btn>
    </div>

    <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height my-4">
      <v-btn variant="tonal" color="primary">btn primary</v-btn>
      <v-btn variant="tonal" color="secondary">btn secondary</v-btn>
      <v-btn variant="tonal" color="error">btn error</v-btn>
      <v-btn variant="tonal" color="info">btn info</v-btn>
      <v-btn variant="tonal" color="success">btn success</v-btn>
      <v-btn variant="tonal" color="warning">btn warning</v-btn>
    </div>

    <p class="text-primary">text primary</p>
    <p class="text-secondary">text secondary</p>
    <p class="text-error">text error</p>
    <p class="text-info">text info</p>
    <p class="text-success">text success</p>
    <p class="text-warning">text warning</p>


    <div class="bg-primary">bg primary</div>
    <div class="bg-secondary">bg secondary</div>
    <div class="bg-error">bg error</div>
    <div class="bg-info">bg info</div>
    <div class="bg-success">bg success</div>
    <div class="bg-warning">bg warning</div>

    <v-sheet>testing sheet</v-sheet>
  </v-container>
</template>

<script lang="ts" setup>
</script>
<style scoped>
  .portrait-shapes {
    position: absolute;
    height: 140px;
    width: 140px;
    right: 20px;
    bottom: -10px;
  }

  .bg-main-section {
    min-height: 600px;
    background: linear-gradient(90deg, rgb(var(--v-theme-background)) 55%, rgb(var(--v-theme-surface)) 45%);
  }

  .text-gradient {
    font-size: 72px;
    background: -webkit-linear-gradient(#22b573, #0071bc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
</style>
