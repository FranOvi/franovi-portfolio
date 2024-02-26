<template>
  <v-container class="py-16" tag="section" id="section-skills">
    <h2>Skills</h2>
    <h3>Professional Experience</h3>

    <div>

    <TimelineGantt class="mb-10" @selectExpand="(id: string) => selectExpandId(id)"></TimelineGantt>

    <v-timeline side="end" justify="start" truncate-line="both" :style="`grid-template-columns: ${mobile ? '0' : '1'}fr 0fr 6fr;`">
      <v-timeline-item
        v-for="experience in experiences"
        :key="experience.id"
        :hide-opposite="mobile"
        size="x-small"
      >
        <template v-slot:opposite>
          <span class="text-caption text-blue-grey">
            {{ experienceRangeFormat(experience, ShowFormat.Date | ShowFormat.Compact) }}
            <v-tooltip location="bottom" activator="parent">
              {{ experienceRangeFormat(experience) }}
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
          <v-card-subtitle class="text-subtitle-1">
            {{ experience.organization }}
          </v-card-subtitle>
          <v-card-text class="text-caption text-medium-emphasis pt-1 pb-0 d-block d-lg-none">
            {{ experienceRangeFormat(experience) }}
          </v-card-text>

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

      <v-row align="center" justify="center" dense>
        <v-col cols="12">
          <h3 class="mt-3 text-center">
            <v-badge v-if="toggle === ''" :content="techSkills.length" inline><span class="mr-2">Tech Skills</span></v-badge>
            <span v-else>Tech Skills</span>
          </h3>
        </v-col>
        <v-btn-toggle v-model="toggle" border density="comfortable" divided style="border-radius: 25px;">
          <v-btn value="">None</v-btn>
          <v-btn value="experience">Experience</v-btn>
          <v-btn value="type">Type</v-btn>
        </v-btn-toggle>
      </v-row>

      <v-row dense class="py-3">
        <transition-group name="list">
          <template v-for="skill in techSkillsGrouped" :key="typeof(skill) === 'string' ? skill : skill.name">
            <v-col v-if="typeof(skill) === 'string'" cols="12">
              <div class="text-subtitle-2 mt-2">
                <v-badge inline :content="techSkills.filter(s => skill === (s[toggle === '' ? 'experience' : toggle] ?? '')).length">
                  <span class="mr-2">{{ skill }}</span>
                </v-badge>
              </div>
            </v-col>
            <v-col v-else cols="6" md="4" xl="3">
              <v-hover v-slot="{ isHovering, props }">
                <v-list-item :active="isHovering" :color="skill.color" class="w-100 py-2" variant="tonal" rounded="lg" density="comfortable" v-bind="props">
                  <template v-slot:prepend>
                    <span class="mr-4">
                      <v-icon :icon="skill.icon" size="x-large"/>
                    </span>
                  </template>
                  <v-list-item-title>{{ skill.name }}</v-list-item-title>
                  <v-list-item-subtitle>5 projects</v-list-item-subtitle>
                </v-list-item>
              </v-hover>
            </v-col>
          </template>
        </transition-group>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
  import useFormatSimpleDateRange from '@/use/formatSimpleDateRange';
  import TimelineGantt from '@/components/TimelineGantt.vue';
  import experiences from "@/data/experiences.ts";
  import type { Skill } from '@/types/skill';
  import { ShowFormat } from '@/use/formatSimpleDateRange';
  import { useDisplay } from 'vuetify';
  import { ref, computed } from 'vue';

  const { experienceRangeFormat } = useFormatSimpleDateRange();
  const { mobile } = useDisplay();
  const toggle = ref<''|'experience'|'type'>('');
  const expandId = ref('implementhit');

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

  //Experience: Profesional, Proficient, Beginner
  //Type: Frontend, Backend, Libraries? (Vuetify, Pinia, Bootstrap), Mobile, Database, Testing, Tools
  const techSkills: Skill[] = [
    {
      'name': 'Laravel',
      'icon': 'mdi-laravel',
      'experience': 'Profesional',
      'type': 'Backend',
      'color': 'red-darken-2',
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
      'color': 'deep-purple-accent-1',
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
      'color': 'deep-purple-accent-1',
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
      'color': 'indigo-accent-2',
    },
    {
      'name': 'Microsoft SQL',
      'icon': 'mdi-database',
      'experience': 'Proficient',
      'type': 'Database',
      'color': 'red-darken-2',
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
      'color': 'blue-grey',
    },
    //WebApi
    //phpunit Jira bitbucket
    //Herramientas vscode datagrip Jira Postman Vmware
    //Mover git github fuera de database
    //Apache Redis
  ];

  const expComp = ['Profesional', 'Proficient', 'Beginner'];
  const typeComp = ['Backend', 'Frontend', 'Web', 'Programming Language', 'Database'];
  const sortSkill = (a: Skill, b: Skill): number => {
    if (toggle.value === 'experience')  return expComp.indexOf(a.experience) - expComp.indexOf(b.experience);
    if (toggle.value === 'type') return typeComp.indexOf(a.type) - typeComp.indexOf(b.type);
    return 0;
  }

  const techSkillsGrouped = computed(() => toggle.value === '' ? techSkills : techSkills
    .sort(sortSkill)
    .reduce((acc: any, cur: Skill) => {
      if (toggle.value === '') return acc;
      if ((acc.length - 1) === -1 || (cur[toggle.value] !== (acc[acc.length - 1][toggle.value] ?? '')))
        acc.push(cur[toggle.value]);
      acc.push(cur);
      return acc;
    }, []) as (Skill|string)[]);
</script>
<style scoped>
  :deep(.v-timeline-item__body) {
    width: 100%;
  }
</style>
<style>
  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .list-leave-active {
    position: absolute;
  }
</style>
