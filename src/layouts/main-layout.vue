<template>
  <q-layout view="hHh Lpr lFf" class="font-titillium text-default">
    <the-header />
    <the-drawer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import TheHeader from 'src/layouts/components/main/the-header.vue';
import TheDrawer from 'src/layouts/components/main/the-drawer.vue';
</script>
