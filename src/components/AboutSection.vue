<template>
  <v-container fluid tag="section" id="section-about" :class="{'h-screen': !mobile}" class="bg-main-section ma-0 pa-0 d-flex align-center">
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
    <h2>About Me</h2>
    <v-row>
      <v-col cols="12" lg="9" xl="6">
        <v-sheet>
          <p class="text-body-1 text-justify mb-3">My name is Francisco Oviedo, I am a Mid Fullstack Developer. I graduated from Universidad Centroamericana (UCA), Nicaragua in 2021, with a bachelors in Systems Engineering.</p>
          <p class="text-body-1 text-justify mb-3">With a passion for web development and 3+ years of experience in Laravel and Vue.js, I strive to create high-quality, efficient, and user-friendly web applications.</p>
          <p class="text-body-1 text-justify mb-3">I recide in Nicaragua in latin america, I'm open to work fulltime.</p>
        </v-sheet>
      </v-col>
      <v-col cols="12" lg="3" xl="3">
        <div class="d-flex flex-wrap justify-space-between" style="gap: 30px">
          <v-sheet class="pa-2 flex-fill">
            <div class="text-h4">
              4<span class="text-primary">+</span>
            </div>
            Years experience
          </v-sheet>
          <v-sheet class="pa-2 flex-fill">
            <div class="text-h4">
              20<span class="text-primary">+</span>
            </div>
            Proyects
          </v-sheet>
          <v-sheet class="pa-2 flex-fill">
            <div class="text-h4">
              10<span class="text-primary">+</span>
            </div>
            Tech Skills
          </v-sheet>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <div class="bg-surface-variation">
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" md="6" lg="3">
          <v-card>
            <v-card-item>
              <v-icon icon="mdi-puzzle-outline"></v-icon>
              <h4 class="mt-12">Problem Solving</h4>
              <p class="my-2 text-medium-emphasis">Analytical thinking to solve challenges</p>
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <v-card>
            <v-card-item>
              <v-icon icon="mdi-head-lightbulb-outline"></v-icon>
              <h4 class="mt-12">Creativity</h4>
              <p class="my-2 text-medium-emphasis">Outside the box thinking to come up with innovative solutions</p>
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <v-card>
            <v-card-item>
              <v-icon icon="mdi-account-supervisor-circle-outline"></v-icon>
              <h4 class="mt-12">Leadership</h4>
              <p class="my-2 text-medium-emphasis">Guide and support teams towards a common goal</p>
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <v-card>
            <v-card-item>
              <v-icon icon="mdi-account-group-outline"></v-icon><!-- mdi-crowd -->
              <h4 class="mt-12">Team Player</h4>
              <p class="my-2 text-medium-emphasis">Communicate and collaborate with others in a team enviroment</p>
            </v-card-item>
          </v-card>
        </v-col>
    </v-row>
    </v-container>
  </div>
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

  function handleOrientation(e: any) {
    const THRESHOLD = 15;
    const { beta, gamma } = e;

    const horizontal = gamma / 90;
    const vertical = (beta - 90) / 90;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    if (cardRef?.value) cardRef.value.style.transform = `perspective(${375}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  }

  function resetStyles(e: any) {
    if (cardRef?.value) cardRef.value.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  }

  onMounted(() => {
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
    if (motionMatchMedia.matches) return;

    if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
      window.addEventListener("deviceorientation", handleOrientation);
    } else {
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
    /* radial-gradient(circle at top right, rgb(var(--v-theme-surface)) 48%, rgb(var(--v-theme-background)) 0); */
  }

  .text-gradient {
    font-size: 72px;
    background: -webkit-linear-gradient(#22b573, #0071bc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /*--clr-gradient: linear-gradient( -90deg, var(--clr-primary), var(--clr-secondary) );*/

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
