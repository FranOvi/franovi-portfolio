<template>
  <v-container tag="section" id="section-skills">
    <h2>Skills</h2>
    <h3>Professional Experience</h3>

    <div>

    <TimelineGantt @selectExpand="(id: string) => selectExpandId(id)"></TimelineGantt>

    <v-timeline side="end" justify="start" truncate-line="both">
      <v-timeline-item
        v-for="experience in experiences"
        :key="experience.id"
        :fill-dot="false"
        size="x-small"
        class="grid-stretch"
      >
        <v-card @click="selectExpandId(experience.id)"
          class="elevation-0" color="white"
        >
          <v-card-title class="text-h6">
            {{ experience.position }} - {{ experience.company }}
          </v-card-title>
          <v-card-subtitle class="text-caption">
            {{ experience.startDate }} - {{ experience.endDate }} ({{ experience.elapsedTime }})
          </v-card-subtitle>

          <v-expand-transition>
            <v-card-text v-show="expandId === experience.id">
              <v-divider class="mb-1"></v-divider>
              <p class="my-2 text-subtitle-1">{{ experience.description}}</p>
              <ul class="ms-4 text-subtitle-1">
                <li v-for="task in experience.tasks">
                  {{ task }}
                </li>
              </ul>
            </v-card-text>
          </v-expand-transition>
        </v-card>

      </v-timeline-item>
    </v-timeline>
    </div>

    <h3>Languages</h3>
    <v-chip-group>
      <v-chip size="large">
        Spanish - Native
      </v-chip>
      <v-chip size="large">
        English - Fluent
      </v-chip>
    </v-chip-group>

    <v-row dense>
      <v-col cols="12" sm>
        <h3>Tech Skills</h3>
      </v-col>
      <v-col sm="auto">
        <div class="d-flex flex-row">
          <div class="my-2 me-3">Group by</div>
          <v-select
            v-model="toggle"
            :items="[{ title: 'Experience', value: 'experience' }, { title: 'Type', value: 'type' }]"
            item-title="title" item-value="value" single-line variant="solo" density="compact" hide-details
          />
        </div>
      </v-col>
    </v-row>
    <div v-for="(skills, group) in techSkillsGrouped">
      <div class="text-subtitle-2">{{ group }}</div>
      <v-chip-group>
        <v-chip v-for="skill in skills" :prepend-icon="skill.icon" size="large">
          {{ skill.name }}
        </v-chip>
      </v-chip-group>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
  import TimelineGantt from '@/components/TimelineGantt.vue'
  import { ref, computed } from 'vue';
  import type { Experience } from '@/types/experience';
  import type { Skill } from '@/types/skill';

  const toggle = ref<'experience'|'type'>('experience');
  const expandId = ref('');
  const selectExpandId = (id: string) => expandId.value = (expandId.value === id ? '' : id);

  const experiences = ref<Experience[]>([
    {
      'id': 'implementhit',
      'company': 'ImplementHIT',
      'position': 'Mid. Fullstack Developer',
      'startDate': 'Jun. 2021',
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
      'startDate': 'Nov. 2019',
      'endDate': 'Jun. 2021',
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
      'startDate': 'Jan. 2020',
      'endDate': 'Jun. 2020',
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
      'startDate': 'Mar. 2019',
      'endDate': 'Oct. 2019',
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
  const techSkills = ref<Skill[]>([
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
      'experience': 'Beginner',
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
      'name': 'C Sharp',
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

  const techSkillsGrouped = computed(() => techSkills.value.reduce((acc: any, cur) => {
    let key = cur[toggle.value];
    if (!acc[key]) acc[key] = [];
    acc[key].push(cur);
    return acc;
  }, {}) as { [key: string]: Skill[] });
</script>
<style scoped>
  .grid-stretch :deep(.v-timeline-item__body) {
    width: 70vw;
  }
</style>
