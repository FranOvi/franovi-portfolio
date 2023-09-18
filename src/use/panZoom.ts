import { useTransition } from "@vueuse/core";
import { Ref, reactive, computed, ref, readonly, onMounted, onUnmounted, watch } from "vue"

export interface Position {
  x: number,
  y: number
}

export default function usePanZoom(
  targetElement: Ref<HTMLElement | null | undefined>,
  containerElement?: Ref<HTMLElement | null | undefined>
){
  if (!containerElement) containerElement = computed(() => targetElement.value?.parentElement ?? null);

  const posStart = reactive<Position>({ x: 0, y: 0 });
  const posEnd = reactive<Position>({ x: 0, y: 0 });

  const distanceX = computed(() => posStart.x - posEnd.x);
  const distanceY = computed(() => posStart.y - posEnd.y);
  const initialScrollPosition = ref(0);
  const scale = ref(1.0);
  const isPointerDown = ref(false);
  //For Scroll
  const isPointerMovedScroll = ref(false);
  const mouseRatio = ref(0.0);

  const transitionVector = ref([1, 0])
  const transitionVectorBezier = useTransition(transitionVector, { duration: 500, transition: [0.75, 0, 0.25, 1] });
  watch(transitionVectorBezier, (val) => {
    if (targetElement.value) targetElement.value.style.width = `${val[0]*100}%`;
    if (containerElement?.value) containerElement.value.scrollLeft = val[1];
  });

  const onPointerDown = function(e: PointerEvent) {
    isPointerDown.value = true;
    // Disable scroll on for TouchEvents
    targetElement.value?.style?.setProperty('touch-action', 'none');
    // Future pointer events will be retargeted to target until pointerup/cancel
    const eventTarget = e.target as HTMLElement | undefined;
    eventTarget?.setPointerCapture(e.pointerId);
    const { clientX: x, clientY: y } = e;
    posStart.x = x;
    posStart.y = y;
    posEnd.x = x;
    posEnd.y = y;
    if (containerElement?.value) initialScrollPosition.value = containerElement.value?.scrollLeft ?? 0;
  }

  const onPointerMove = function(e: PointerEvent) {
    isPointerMovedScroll.value = true;
    if (!isPointerDown.value) return;
    const { clientX: x, clientY: y } = e;
    posEnd.x = x;
    posEnd.y = y;

    if (containerElement?.value) containerElement.value.scrollLeft = initialScrollPosition.value + distanceX.value;
  }

  const onPointerUp = function(e: PointerEvent) {
    isPointerDown.value = false;
    targetElement.value?.style?.setProperty('touch-action', 'initial');
  };

  const onScroll = function(e: WheelEvent) {
    if (!e.ctrlKey) return;

    e.preventDefault();

    const mouseX = e.clientX;
    let { left = 0, width = 0 } = targetElement.value?.getBoundingClientRect() ?? {};
    const { left: containerLeft = 0 } = containerElement?.value?.getBoundingClientRect() ?? {};
    mouseRatio.value = (mouseX - left) / width;

    scale.value = Math.max(1, scale.value - e.deltaY * 0.01);
    transitionVector.value[0] = scale.value;
    if (targetElement.value) targetElement.value.style.width = `${scale.value * 100}%`;

    width = targetElement.value?.getBoundingClientRect().width ?? 0;
    const scrollLeft = Math.round((width * mouseRatio.value) - (mouseX - containerLeft));
    transitionVector.value[1] = scrollLeft;
    //if (containerElement?.value) containerElement.value.scrollLeft = scrollLeft
  };

  onMounted(() => {
    targetElement.value?.addEventListener('pointerdown', (e: PointerEvent) => onPointerDown(e));
    targetElement.value?.addEventListener('pointermove', (e: PointerEvent) => onPointerMove(e));
    targetElement.value?.addEventListener('pointerup', (e: PointerEvent) => onPointerUp(e));
    targetElement.value?.addEventListener('wheel', (e: WheelEvent) => onScroll(e));
  });

  onUnmounted(() => {
    targetElement.value?.removeEventListener('pointerdown', onPointerDown);
    targetElement.value?.removeEventListener('pointermove', onPointerMove);
    targetElement.value?.removeEventListener('pointerup', onPointerUp);
    targetElement.value?.removeEventListener('wheel', onScroll);
  });

  return {
    posStart: readonly(posStart),
    posEnd: readonly(posEnd),
    distanceX,
    distanceY
  }
}
