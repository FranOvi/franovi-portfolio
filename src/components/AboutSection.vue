<template>
  <v-container fluid tag="section" id="section-about" class="bg-main-section h-screen ma-0 pa-0 d-flex align-center">
    <v-container>
      <v-row>
        <v-col cols="12" md="7" class="mt-16">
          <p class="font-weight-bold text-dark">Hello there, I'm</p>
          <h1 class="text-h2 font-weight-bold text-dark">Francisco Oviedo</h1>
          <h4 class="text-h3 font-weight-bold mt-4 text-gradient">Mid Fullstack Developer</h4>
          <v-btn class="text-capitalize mt-8" color="error" variant="flat">
            Let's talk
          </v-btn>
        </v-col>
        <v-col cols="12" md="5" class="text-center">
          <div ref="cardRef" class="card-hover-effect position-relative" :style="`width: ${mobile  ? '250px' : '460px'};`">
            <img src="/portrait.png" />
            <img src="/decorator-shape-1.svg" class="portrait-shapes" />
          </div>
        </v-col>
      </v-row>
    </v-container>

  </v-container>
  <v-container class="py-16">
    <v-card class="mx-auto">
      <v-card-text>
        <p>I graduated from Universidad Centroamericana (UCA), Nicaragua, 2021, with a bachelors in Systems Engineering.</p>
        <p>I have 3 years of experience as a fullstack developer focusing on Laravel and Vue.js.</p>
        <p>I recide in Nicaragua in latin america, I'm open to work fulltime.</p>
      </v-card-text>
    </v-card>


    <!-- <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height my-4">
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

    <v-sheet>testing sheet</v-sheet> -->
  </v-container>
</template>

<script lang="ts" setup>
  import { useDisplay } from 'vuetify';
  import { ref, onMounted } from 'vue';

  const { mobile } = useDisplay();
  const cardRef = ref();

  function handleHover(e: any) {
    const THRESHOLD = 15;
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    if (cardRef?.value) cardRef.value.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  }

  function resetStyles(e: any) {
    if (cardRef?.value) cardRef.value.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  }

  onMounted(() => {
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");

    if (!motionMatchMedia.matches) {
      cardRef?.value?.addEventListener("mousemove", handleHover);
      cardRef?.value?.addEventListener("mouseleave", resetStyles);
    }
  });
</script>
<style scoped>
  .portrait-shapes {
    position: absolute;
    height: 140px;
    width: 140px;
    right: 20px;
    bottom: -10px;

    z-index: 1;
    transition: transform 0.3s ease;
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

  .card-hover-effect {
    transition: transform 0.1s ease;
    transform-style: preserve-3d;
    will-change: transform;
  }

  .card-hover-effect::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .card-hover-effect:hover .portrait-shapes {
    transform: translateZ(24px);
  }
</style>
