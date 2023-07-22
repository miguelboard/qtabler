<template>
  <q-card
    bordered
    class="t-window absolute shadow-0"
    v-bind="$attrs"
    :id="name"
  >
    <q-card-section
      class="t-window__header cursor-move bg-grey-1 row justify-between items-center"
      :id="`${name}__header`"
    >
      <div class="column justify-start items-start">
        <h6 class="text-body1 q-ma-none text-weight-bold">{{ title }}</h6>
        <p class="text-cation q-ma-none">{{ subTitle }}</p>
      </div>
      <q-btn flat round size="xs" @click="onCloseWindow">
        <t-icon
          size="xs"
          outline-size="md"
          inline-size="sm"
          name="sym_o_close"
        ></t-icon>
      </q-btn>
    </q-card-section>
    <q-card-section>
      <slot></slot>
    </q-card-section>
    <q-card-actions class="q-px-md q-pb-md">
      <slot name="footer"></slot>
    </q-card-actions>
  </q-card>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
// props & emits
const props = withDefaults(
  defineProps<
    Partial<{
      title: string;
      name: string;
      subTitle: string;
    }>
  >(),
  {
    title: '',
    subTitle: '',
    name: 't-window',
  }
);
const emits = defineEmits<{
  (e: 'close'): void;
}>();

// method
function dragElement(elmnt: HTMLElement) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + '__header')) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + '__header').onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function onCloseWindow() {
  emits('close');
}

// hooks
onMounted(() => {
  const tWindow = document.getElementById(props.name);
  if (tWindow) {
    dragElement(tWindow);
  }
});
</script>
<style lang="scss">
.t-window {
  z-index: 9999;
  min-width: 360px;
  max-width: calc(100vw - 48px);
  &__header {
    z-index: 10000;
  }
}
</style>
