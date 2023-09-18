<template>
  <div class="bg-background" style="position: sticky; top: 48px; z-index: 10;">
    <div style="overflow-x: hidden; touch-action: none;">
      <div ref="ganttTimelineRef" class="position-relative" style="height:240px; width: 100%;">

        <div v-for="(item, index) in experiences" class="position-absolute rounded-xl mt-1 py-1 px-2"
          :class="{ 'bg-error': item.type === 'job', 'bg-blue': item.type === 'education' }"
          @click="selectExpand(item.id)"
          :style="`height:30px; top: ${(index * 40)}px; left: ${mapSimpleDate(item.startDate)}%; width: ${mapSimpleDate(item.endDate) - mapSimpleDate(item.startDate)}%;`"
          :key="item.id">
          <span class="text-truncate" style="position: sticky; left: 20px; display: block; max-width: fit-content;">{{ item.organization }}</span>
        </div>

        <!-- <div v-for="(item, index) in timelineData" class="position-absolute rounded-xl mt-1 py-1 px-2"
          :class="{
            'bg-error': item.type === 'job',
            'bg-blue': item.type === 'university'
          }"
          @click="selectExpand(item.id)"
          :style="`height:30px; top: ${(index * 40)}px; left: ${item.left}%; width: ${item.width}%;`"
          :key="item.id">
          <span class="text-truncate" style="position: sticky; left: 20px; display: block; max-width: fit-content;">{{ item.name }}</span>
        </div> -->
        <span class="position-absolute" style="bottom:10px; left: 0%;">2016</span><!-- 13.5 -->
        <span class="position-absolute" style="bottom:10px; left: 13.5%;">2017</span>
        <span class="position-absolute" style="bottom:10px; left: 27%;">2018</span>
        <span class="position-absolute" style="bottom:10px; left: 40.5%;">2019</span>
        <span class="position-absolute" style="bottom:10px; left: 54%;">2020</span>
        <span class="position-absolute" style="bottom:10px; left: 67.5%;">2021</span>
        <span class="position-absolute" style="bottom:10px; left: 81%;">2022</span>
        <span class="position-absolute" style="bottom:10px; left: 94.5%;">Now</span>
      </div>
    </div>
    <div class="position-absolute" style="bottom:40px; right: 20px;">
      <v-btn-group color="dark" rounded="xl">
        <v-btn icon="mdi-plus"></v-btn>
        <v-btn icon="mdi-minus"></v-btn>
      </v-btn-group>
    </div>

    <v-snackbar v-model="snackbar">
      Press ctrl to zoom in / out
    </v-snackbar>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import usePanZoom from '@/use/panZoom';
  import useMapSimpleDate from '@/use/mapSimpleDate';
  import experiences from '@/data/experiences.ts';

  const emit = defineEmits(['selectExpand']);

  const selectExpand = (id: string) => emit('selectExpand', id);

  const ganttTimelineRef = ref();
  usePanZoom(ganttTimelineRef);

  const now = new Date();
  const { mapSimpleDate } = useMapSimpleDate({year: 2016, month: 1}, {year: now.getFullYear(), month: now.getMonth() +1});

  const snackbar = ref(true);
  //ref<Skill[]>([
  const timelineData = ref([
    {
      id: 'uca',
      name: 'UCA',
      type: 'university',
      left: 0,
      width: 73.25,
    },
    {
      id: 'beebusiness',
      name: 'Bee Business',
      type: 'job',
      left: 44.18,
      width: 9.3,
    },
    {
      id: 'telesoft',
      name: 'Vital PBX',
      type: 'job',
      left: 53.48,
      width: 22.09,
    },
    {
      id: 'fitnesscorecenter',
      name: 'Fitness Core Center',
      type: 'job',
      left: 55.81,
      width: 5.81,
    },
    {
      id: 'implementhit',
      name: 'Implement HIT',
      type: 'job',
      left: 75.58,
      width: 24.41,
    },

  ]);
</script>
