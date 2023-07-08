<template>
  <q-layout view="lHh Lpr lFf">
    <the-header />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import TheHeader from 'src/layouts/components/main/the-header.vue';
</script>
