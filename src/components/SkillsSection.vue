<template>
  <v-container class="py-16" tag="section" id="section-skills">
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
          <span class="text-caption text-blue-grey">
            {{ (experience.startDate?.year ?? '') + ' - ' + (experience.endDate?.year ?? 'Now') }}
            <v-tooltip location="bottom" activator="parent">
              {{ dateRangeFormatted(experience.startDate, experience.endDate) }}
            </v-tooltip>
          </span>
        </template>
        <v-card @click="selectExpandId(experience.id)"
          :id="`experience-card-${experience.id}`"
          class="elevation-0 py-4"
        >
          <v-card-title class="text-h6 pt-0 pb-2">
            {{ experience.name }}
          </v-card-title>
          <v-card-subtitle class="text-caption">
            {{ experience.organization }}
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
    <div class="pt-16">
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

        <v-row dense class="py-3">
          <v-col v-for="skill in skills" cols="12" sm="6" md="4">
            <v-hover v-slot="{ isHovering, props }">
              <v-list-item :active="isHovering" :active-color="skill.color" class="w-100 py-2" variant="tonal" rounded="xl" v-bind="props">
                <template v-slot:prepend>
                  <v-icon class="mr-4" :icon="skill.icon" size="x-large"/>
                </template>
                <v-list-item-title>{{ skill.name }}</v-list-item-title>
                <v-list-item-subtitle>5 projects</v-list-item-subtitle>
              </v-list-item>
            </v-hover>
          </v-col>
        </v-row>
      </div>

    </div>
  </v-container>
</template>

<script lang="ts" setup>
  import TimelineGantt from '@/components/TimelineGantt.vue';
  import experiences from "@/data/experiences.ts";
  import { SimpleDate } from '@/types/simpleDate';
  import type { Skill } from '@/types/skill';
  import { Month } from '@/types/monthEnum';
  import { ref, computed } from 'vue';

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

  function dateRangeFormatted(startDate: SimpleDate, endDate: SimpleDate): string {
    const sameYear = startDate.year === endDate.year;
    const monthDiff = ((endDate.year - startDate.year) * 12) + (endDate.month - startDate.month);
    const years = Math.floor(monthDiff / 12);
    const months = monthDiff % 12;

    return (sameYear ? Month[startDate.month] : `${Month[startDate.month]} ${startDate.year}`) + ' - '
      + `${Month[endDate.month]} ${endDate.year}` + ' ('
      + (years ? `${years} years ` : '')
      + (months ? `${months} months` : '') + ')'
  }

  //Experience: Profesional, Proficient, Beginner
  //Type: Frontend, Backend, Libraries? (Vuetify, Pinia, Bootstrap), Mobile, Database, Testing, Tools
  const techSkills = ref<Skill[]>([
    {
      'name': 'Laravel',
      'icon': 'mdi-laravel',
      'experience': 'Profesional',
      'type': 'Backend',
      'color': 'red-accent-4',
    },
    {
      'name': 'Vue.js',
      'icon': 'mdi-vuejs',
      'experience': 'Profesional',
      'type': 'Frontend',
      'color': 'green',
    },
    {
      'name': 'Angular',
      'icon': 'mdi-angular',
      'experience': 'Beginner',
      'type': 'Frontend',
      'color': 'red-darken-2',
    },

    {
      'name': 'PHP',
      'icon': 'mdi-language-php',
      'experience': 'Profesional',
      'type': 'Programming Language', //web
      'color': 'deep-purple-darken-2',
    },
    {
      'name': 'JavaScript',
      'icon': 'mdi-language-javascript',
      'experience': 'Profesional',
      'type': 'Programming Language', //web
      'color': 'amber-accent-4',
    },
    {
      'name': 'TypeScript',
      'icon': 'mdi-language-typescript',
      'experience': 'Proficient',
      'type': 'Programming Language', //web
      'color': 'blue-darken-2',
    },
    {
      'name': 'Java',
      'icon': 'mdi-language-java',
      'experience': 'Proficient',
      'type': 'Programming Language',
      'color': 'yellow-darken-4',
    },
    {
      'name': 'C Sharp',
      'icon': 'mdi-language-csharp',
      'experience': 'Proficient',
      'type': 'Programming Language',
      'color': 'deep-purple-darken-4',
    },

    {
      'name': 'HTML',
      'icon': 'mdi-language-html5',
      'experience': 'Profesional',
      'type': 'Web',
      'color': 'orange-darken-3',
    },
    {
      'name': 'CSS',
      'icon': 'mdi-language-css3',
      'experience': 'Profesional',
      'type': 'Web',
      'color': 'blue-darken-2',
    },

    {
      'name': 'MySQL',
      'icon': 'mdi-database',
      'experience': 'Proficient',
      'type': 'Database',
      'color': 'indigo-darken-2',
    },
    {
      'name': 'Microsoft SQL',
      'icon': 'mdi-database',
      'experience': 'Proficient',
      'type': 'Database',
      'color': 'red-accent-4',
    },

    {
      'name': 'Git',
      'icon': 'mdi-git',
      'experience': 'Proficient',
      'type': 'Database',
      'color': 'deep-orange-darken-4',
    },
    {
      'name': 'GitHub',
      'icon': 'mdi-github',
      'experience': 'Proficient',
      'type': 'Database',
      'color': 'black',
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
