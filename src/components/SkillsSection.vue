<template>
  <v-container tag="section" id="section-skills">
    <h2>Skills</h2>
    <h3>Professional Experience</h3>
    <v-timeline side="end">
      <v-timeline-item
        v-for="experience in experiences"
        :key="experience.id"
        size="small"
      >
        <div class="text-h5">{{ experience.company }}</div>
        <div class="text-h6">{{ experience.position }} <span class="text-caption">{{ experience.startDate }} - {{ experience.endDate }} ({{ experience.elapsedTime }})</span></div>
        <p>
          {{ experience.description}}
          <ul v-if="experience.tasks">
            <li v-for="task in experience.tasks">
              {{ task }}
            </li>
          </ul>
        </p>
      </v-timeline-item>
    </v-timeline>

    <h3>Languages</h3>
    <v-chip class="mr-2">
      Spanish - Native
    </v-chip>
    <v-chip class="mr-2">
      English - Fluent
    </v-chip>

    <h3>Tech Skills</h3>
    <v-chip-group>
      <v-chip v-for="skill in techSkills" :prepend-icon="skill.icon">
        {{ skill.name }}
      </v-chip>
    </v-chip-group>
  </v-container>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const experiences = ref([
    {
      'id': 'implementhit',
      'company': 'ImplementHIT',
      'position': 'Mid. Fullstack Developer',
      'startDate': 'June, 2021',
      'endDate': 'Current',
      'elapsedTime': '1 year 10 months',
      'description': 'Fullstack developer for a US based company, developed multiple applications with the Laravel and Vue.js stack of technologies.',
      'tasks': [
        'Developed applications to companies in the USA medical sector.',
        'Developed SPAs and Web APIs with Laravel, Vue.js and MySQL.',
        'Used techniques such as index creation, Jobs, eager loading, cache management with Redis for better performance and response times.',
        'Implementation of unit and feature tests.',
        'Generation of Excel and PDF reports, integrating libraries.',
      ],
    },
    {
      'id': 'telesoft',
      'company': 'VitalPBX',
      'position': 'Jr. Developer',
      'startDate': 'November, 2019',
      'endDate': 'June, 2021',
      'elapsedTime': '1 year 10 months',
      'description': 'Develop multiple applications with the Laravel and Vue.js stack of technologies.',
      'tasks': [
        'Developed an SPA in Vue with Laravel, for collaborative project translations.',
        'Developed a Mobile Android VoIP application “Vitxi”.',
        'Migration of call rate software from VB6 to .Net Framework with Visual Basic and the DevExpress library.',
      ],
    },

    {
      'id': 'fitnesscorecenter',
      'company': 'Fitness Core Center',
      'position': 'Intern Jr. Fullstack Developer',
      'startDate': 'January, 2020',
      'endDate': 'June, 2020',
      'elapsedTime': '6 months',
      'description': '',
      'tasks': [
        'Developed a web platform to manage a gym and exercise routines, using Angular with a Laravel Web API',
      ],
    },
    {
      'id': 'beebusiness',
      'company': 'Bee Business Suite',
      'position': 'Intern Jr. Developer',
      'startDate': 'March, 2019',
      'endDate': 'October, 2019',
      'elapsedTime': '8 months',
      'description': '',
      'tasks': [
        'Desktop ERP development in .Net Framework.',
        'Created multiple reports with Active Reports.',
      ],
    },
  ]);

  //Experience: Profesional, Proficient, Beginner
  //Type: Frontend, Backend, Libraries? (Vuetify, Pinia, Bootstrap), Mobile, Database, Testing, Tools
  const techSkills = ref([
    {
      'name': 'Laravel',
      'icon': 'mdi-laravel',
      'experience': 'Profesional',
      'type': 'Backend',
    },
    {
      'name': 'Vue.js',
      'icon': 'mdi-vuejs',
      'experience': 'Profesional',
      'type': 'Frontend',
    },
    {
      'name': 'Angular',
      'icon': 'mdi-angular',
      'experience': 'Proficient',
      'type': 'Frontend',
    },

    {
      'name': 'PHP',
      'icon': 'mdi-language-php',
      'experience': 'Profesional',
      'type': 'Programming Language', //web
    },
    {
      'name': 'JavaScript',
      'icon': 'mdi-language-javascript',
      'experience': 'Profesional',
      'type': 'Programming Language', //web
    },
    {
      'name': 'Java',
      'icon': 'mdi-language-java',
      'experience': 'Proficient',
      'type': 'Programming Language',
    },
    {
      'name': 'C#',
      'icon': 'mdi-language-csharp',
      'experience': 'Proficient',
      'type': 'Programming Language',
    },

    {
      'name': 'HTML',
      'icon': 'mdi-language-html5',
      'experience': 'Profesional',
      'type': 'Web',
    },
    {
      'name': 'CSS',
      'icon': 'mdi-language-css3',
      'experience': 'Profesional',
      'type': 'Web',
    },

    {
      'name': 'MySQL',
      'icon': 'mdi-database',
      'experience': 'Proficient',
      'type': 'Database',
    },
    {
      'name': 'Microsoft SQL',
      'icon': 'mdi-database',
      'experience': 'Proficient',
      'type': 'Database',
    },

    {
      'name': 'Git',
      'icon': 'mdi-git',
      'experience': 'Proficient',
      'type': 'Database',
    },
    {
      'name': 'GitHub',
      'icon': 'mdi-github',
      'experience': 'Proficient',
      'type': 'Database',
    },
  ]);
</script>
