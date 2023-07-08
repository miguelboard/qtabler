<template>
  <router-link
    :to="to"
    class="row justify-center items-center q-mb-xl text-underline-none"
  >
    <q-icon size="lg" name="space_dashboard" class="text-primary"></q-icon>
    <h1 class="text-weight-bold text-h5 q-my-none text-dark">qtabler_</h1>
  </router-link>
</template>
<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router';

withDefaults(
  defineProps<{
    to: RouteLocationRaw;
  }>(),
  {
    to: '/',
  }
);
</script>
