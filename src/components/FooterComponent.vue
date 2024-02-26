<template>
  <v-container fluid tag="section" id="section-footer" class="bg-dark py-10 ma-0 pa-0 d-flex align-center">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" lg="6">
          <div class="d-flex align-center mb-5">
            <svg width="60" height="35"><use xlink:href="/logo-mono.svg#logo" style="vertical-align: text-top;" :style="{fill: 'white'}"></use></svg>
          </div>
          <p class="text-body-2 mb-5">Thanks for checking my portfolio.<br>It was crafted from scratch using <a href="https://vuejs.org/" target="_blank" class="text-white text-decoration-none font-weight-black">Vue</a> and <a href="https://vuetifyjs.com/" target="_blank" class="text-white text-decoration-none font-weight-black">Vuetify</a></p>
          <address class="text-body-2" style="font-style: normal; line-height: 1.8;">
            <a class="d-block text-decoration-none text-white" href="https://www.google.com/maps?q=managua+nicaragua" target="_blank">Managua, Nicaragua (CST-6)</a>
            <a class="d-block text-decoration-none text-white" href="mailto:franciscoviedojr@gmail.com">franciscoviedojr@gmail.com</a>
            <a class="d-block text-decoration-none text-white" href="tel:+50584007149">(+505) 8400-7149</a>
          </address>
        </v-col>
        <v-col cols="12" sm="4" lg="2">
          <p class="text-deep-purple-lighten-3 font-weight-black mb-3">Contact Me</p>
          <ul style="list-style: none; line-height:2.2">
            <li><a class="text-decoration-none text-white" href="https://www.linkedin.com/in/francisco-oviedo-fjoj">Linked In</a></li>
            <li><a class="text-decoration-none text-white" href="https://torre.ai/franciscoviedojr">Torre</a></li>
            <li><a class="text-decoration-none text-white" href="https://github.com/FranOvi">Github</a></li>
            <li><a class="text-decoration-none text-white" href="https://gitlab.com/FranciscoOviedo">Gitlab</a></li>
            <li><a class="text-decoration-none text-white" href="https://stackoverflow.com/users/13171199/francisco-jos%c3%a9-oviedo-ju%c3%a1rez">Stack Overflow</a></li>
            <li><a class="text-decoration-none text-white" href="https://www.instagram.com/francisco_oviedo_codeart/">Instagram</a></li>
          </ul>
        </v-col>
        <v-col cols="12" sm="4" lg="2">
          <p class="text-deep-purple-lighten-3 font-weight-black mb-3">Navigate</p>
          <ul style="list-style: none; line-height:2.2">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Featured Projects</li>
            <li>Contact</li>
          </ul>
        </v-col>
        <v-col cols="12" sm="4" lg="2">
          <p class="text-deep-purple-lighten-3 font-weight-black mb-3">Extra</p>
          <ul style="list-style: none; line-height:2.2">
            <li>My projects</li>
            <li><a class="text-decoration-none text-white" href="/franovi-portfolio/Curriculum 2024 Francisco (en).pdf">Resume</a></li>
          </ul>
        </v-col>
        <v-col>
          <v-divider class="mb-4"/>
          <p class="text-center">Developed by Francisco Oviedo © 2024</p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
