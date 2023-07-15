<template>
  <router-link
    :to="to"
    class="row justify-center items-end text-underline-none"
  >
    <q-icon
      :size="size"
      name="space_dashboard"
      class="text-primary q-mr-sm"
    ></q-icon>
    <h1 class="text-weight-bold q-my-none text-dark" :class="textSizeClass">
      qtabler_
    </h1>
  </router-link>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { RouteLocationRaw } from 'vue-router';

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  }>(),
  {
    to: '/',
    size: 'lg',
  }
);

const textSizeClass = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'text-caption';
    case 'sm':
      return 'text-body2';
    case 'md':
      return 'text-h6';
    case 'lg':
      return 'text-h5';
    case 'xl':
      return 'text-h4';
    default:
      return 'text-h4';
  }
});
</script>
