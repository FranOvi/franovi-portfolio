<template>
  <div class="bg-background" style="position: sticky; top: 48px; z-index: 10;">
    <div style="overflow: hidden; touch-action: none;">
      <div ref="ganttTimelineRef" class="position-relative" :style="`height:${expanded ? 226 : 130}px;`" style="transition: height 0.4s">

        <div v-for="(item, index) in experiences" :key="item.id" class="position-absolute rounded-xl mt-1 py-1 px-2"
          :class="{ 'bg-error': item.type === 'job', 'bg-blue': item.type === 'education' }"
          style="transition: top 0.4s, height 0.4s"
          :style="`height:${expanded ? 30 : 16}px; top: ${(index * (expanded ? 40 : 20))}px; left: ${mapSimpleDate(item.startDate)}%; width: ${mapSimpleDate(item.endDate) - mapSimpleDate(item.startDate)}%;`"
          @click="selectExpand(item.id)">
          <v-tooltip location="bottom" activator="parent"
            :text="`${item.organization} (${item.startDate.year} - ${item.endDate.year})`"/>
          <v-fade-transition>
            <span v-show="expanded" class="text-truncate" style="position: sticky; left: 20px; display: block; max-width: fit-content;">
              {{ item.organization }}
            </span>
          </v-fade-transition>
        </div>

        <span v-for="i in endDate.year - startDate.year" class="position-absolute text-blue-grey"
          v-show="(i-1) % showLevel === 0"
          :style="`bottom:5px; left: ${mapSimpleDate({year:startDate.year + (i-1), month:1})}%;`">
          {{ startDate.year + (i-1) }}
        </span>
        <span class="position-absolute text-blue-grey" style="bottom:5px; left: 95%;">Now</span>
      </div>
    </div>
    <div class="position-absolute" style="bottom:30px; right: 0px;">
      <v-btn-group color="dark" density="comfortable" rounded="xl"> <!-- @click="expanded = !expanded" -->
        <v-btn icon="mdi-plus" @click="zoomUp"></v-btn>
        <v-btn icon="mdi-minus" @click="zoomDown"></v-btn>
      </v-btn-group>
      <v-btn class="toggleExpand ml-2" :class="{ 'rotate': expanded }" color="dark" density="comfortable" rounded="xl" icon="mdi-chevron-down" @click="expanded = !expanded"></v-btn>
    </div>

    <v-snackbar v-model="snackbar">
      Press ctrl to zoom in / out
    </v-snackbar>
  </div>
</template>
<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { SimpleDate } from '@/types/simpleDate';
  import usePanZoom from '@/use/panZoom';
  import useMapSimpleDate from '@/use/mapSimpleDate';
  import experiences from '@/data/experiences.ts';

  const emit = defineEmits(['selectExpand']);

  const selectExpand = (id: string) => emit('selectExpand', id);

  const ganttTimelineRef = ref();
  const {scale, zoomUp, zoomDown} = usePanZoom(ganttTimelineRef);

  const now = new Date();
  const startDate: SimpleDate = {year: 2016, month: 1};
  const endDate: SimpleDate = {year: now.getFullYear(), month: now.getMonth() +1};
  const { mapSimpleDate } = useMapSimpleDate(startDate, endDate);

  const snackbar = ref(false);
  const expanded = ref(false);

  const showLevel = computed(() => {
    if (scale.value <= 1) return 4;
    if (scale.value <= 2) return 2;
    return 1;
  })
</script>
<style scoped>
.toggleExpand {
    transition: transform .3s ease-in-out !important;
}

.toggleExpand.rotate {
    transform: rotate(180deg);
}
</style>
