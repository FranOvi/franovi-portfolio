<template>
  <v-container tag="section" id="section-skills">
    <h2>Skills</h2>
    <h3>Professional Experience</h3>

    <div>

    <TimelineGantt @selectExpand="(id: string) => selectExpandId(id)"></TimelineGantt>

    <v-timeline side="end" justify="start" truncate-line="both" style="grid-template-columns: 1fr 0fr 6fr;">
      <v-timeline-item
        v-for="experience in experiences"
        :key="experience.id"
        :fill-dot="false"
        size="x-small"
      >
        <template v-slot:opposite>
          <span class="text-caption">
            2019 - 2020
            <v-tooltip location="bottom" activator="parent">
              {{ dateRangeFormatted(experience.startDate, experience.endDate) }}
            </v-tooltip>
          </span>
        </template>
        <v-card @click="selectExpandId(experience.id)"
          :id="`experience-card-${experience.id}`"
          class="elevation-0"
        >
          <v-card-title class="text-h6">
            {{ experience.position }}
          </v-card-title>
          <v-card-subtitle class="text-caption">
            {{ experience.company }}
            <!-- {{ experience.startDate }} - {{ experience.endDate }} ({{ experience.elapsedTime }}) -->
          </v-card-subtitle>

          <v-expand-transition>
            <div v-show="expandId === experience.id">
              <v-card-text>
                <v-divider class="mb-1"></v-divider>
                <p class="my-2 text-subtitle-1">{{ experience.description}}</p>
                <ul class="ms-4 text-subtitle-1">
                  <li v-for="task in experience.tasks">
                    {{ task }}
                  </li>
                </ul>
              </v-card-text>
            </div>
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
      <div class="text-subtitle-2 mt-2">{{ group }} <v-badge :content="skills.length" inline></v-badge></div>
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
  import dayjs from 'dayjs';
  import { ref, computed } from 'vue';
  import type { Experience } from '@/types/experience';
  import type { Skill } from '@/types/skill';

  const toggle = ref<'experience'|'type'>('experience');
  const expandId = ref('');
  //const selectExpandId = (id: string) => expandId.value = (expandId.value === id ? '' : id);

  const selectExpandId = (id: string) => {
    const oldElement = document.getElementById(`experience-card-${expandId.value}`);
    const element = document.getElementById(`experience-card-${id}`);
    expandId.value = (expandId.value === id ? '' : id);

    //Cheating a little bit. I know px will be the height after transition
    //TODO Al cambiar entre items en el accordion (Experiences) se debe hacer scroll de ser necesario para que no quede fuera de vista el item seleccionado
    if (oldElement && element && (oldElement?.offsetTop ?? 0) < element.offsetTop) {
      window.scrollTo({
        behavior: 'smooth',
        top:
          oldElement.getBoundingClientRect().top +
          window.pageYOffset +
          -300 + 68,
      })
    }
  };

  const experiences = ref<Experience[]>([
    {
      'id': 'implementhit',
      'company': 'ImplementHIT',
      'position': 'Mid. Fullstack Developer',
      'startDate': '2021-06-01', //'Jun. 2021', //2021-06-1
      'endDate': undefined, //Current null
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
      'startDate': 'Oct. 2019',
      'endDate': 'May. 2021',
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
      'description': '',
      'tasks': [
        'Developed a web platform to manage a gym and exercise routines, using Angular with a Laravel Web API',
      ],
    },
    {
      'id': 'beebusiness',
      'company': 'Bee Business Suite',
      'position': 'Intern Jr. Developer',
      'startDate': 'Feb. 2019',
      'endDate': 'Sep. 2019',
      'description': '',
      'tasks': [
        'Desktop ERP development in .Net Framework.',
        'Created multiple reports with Active Reports.',
      ],
    },
  ]);

  function dateRangeFormatted(date1?: string, date2?: string): string {
    let startDate = dayjs(date1);
    let endDate = dayjs(date2).endOf('month');

    const sameYear = startDate.year() === endDate.year();
    const monthDiff = Math.round(endDate.diff(startDate, 'month', true));
    const years = Math.floor(monthDiff / 12);
    const months = monthDiff % 12;

    return startDate.format(sameYear ? 'MMM' : 'MMM YYYY') + ' - '
      + endDate.format('MMM YYYY') + ' ('
      + (years ? `${years} years ` : '')
      + (months ? `${months} months)` : ')')
  }

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
      'name': 'TypeScript',
      'icon': 'mdi-language-typescript',
      'experience': 'Proficient',
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
    //WebApi
    //phpunit Jira bitbucket
    //Herramientas vscode datagrip Jira Postman Vmware
    //Mover git github fuera de database
    //Apache Redis
  ]);

  const techSkillsGrouped = computed(() => techSkills.value.reduce((acc: any, cur) => {
    let key = cur[toggle.value];
    if (!acc[key]) acc[key] = [];
    acc[key].push(cur);
    return acc;
  }, toggle.value === 'experience' ? {'Profesional': [], 'Proficient': [], 'Beginner': []} : {}) as { [key: string]: Skill[] });
</script>
<style scoped>
  :deep(.v-timeline-item__body) {
    width: 100%;
  }
</style>
