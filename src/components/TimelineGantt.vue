<template>
  <div style="position: sticky; top: 48px; background: white; z-index: 10;">
    <div style="overflow-x: hidden; touch-action: none;">
      <div ref="ganttTimelineRef" class="position-relative" style="height:260px; width: 200%;">
        <div @click="selectExpand('implementhit')" class="position-absolute bg-error rounded-xl mt-1 py-1 px-2" style="height:30px; top: 0px; left: 75.58%; width: 24.41%;">Implement HIT</div>
        <div @click="selectExpand('fitnesscorecenter')" class="position-absolute bg-error rounded-xl mt-1 py-1 px-2" style="height:30px; top: 40px; left: 55.81%; width: 5.81%;">Fitness Core Center</div>
        <div @click="selectExpand('telesoft')" class="position-absolute bg-error rounded-xl mt-1 py-1 px-2" style="height:30px; top: 80px; left: 53.48%; width: 22.09%;">Vital PBX</div>
        <div @click="selectExpand('beebusiness')" class="position-absolute bg-error rounded-xl mt-1 py-1 px-2" style="height:30px; top: 120px; left: 44.18%; width: 9.3%;">Bee Business</div><!-- 8.13 -->
        <div @click="selectExpand('implementhit')" class="position-absolute bg-blue rounded-xl mt-1 py-1 px-2" style="height:30px; top: 160px; left: 0%; width: 73.25%;">UCA</div>

        <span class="position-absolute" style="top:200px; left: 0%;">2016</span><!-- 13.5 -->
        <span class="position-absolute" style="top:200px; left: 13.5%;">2017</span>
        <span class="position-absolute" style="top:200px; left: 27%;">2018</span>
        <span class="position-absolute" style="top:200px; left: 40.5%;">2019</span>
        <span class="position-absolute" style="top:200px; left: 54%;">2020</span>
        <span class="position-absolute" style="top:200px; left: 67.5%;">2021</span>
        <span class="position-absolute" style="top:200px; left: 81%;">2022</span>
        <span class="position-absolute" style="top:200px; left: 94.5%;">Now</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import usePanZoom from '@/use/panZoom';

  const emit = defineEmits(['selectExpand']);

  const selectExpand = (id: string) => emit('selectExpand', id);

  const ganttTimelineRef = ref();
  usePanZoom(ganttTimelineRef);
</script>
