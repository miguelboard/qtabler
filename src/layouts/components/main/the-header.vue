<template>
  <q-header>
    <q-toolbar class="bg-white text-dark border-bottom">
      <t-logo size="md" class="q-mb-none" />
      <q-space></q-space>
      <the-messsage></the-messsage>
      <the-notification></the-notification>
      <the-account></the-account>
    </q-toolbar>
  </q-header>
</template>
<script lang="ts" setup>
import TheAccount from 'src/layouts/components/main/the-account.vue';
import TheMesssage from 'src/layouts/components/main/the-messsage.vue';
import TheNotification from 'src/layouts/components/main/the-notification.vue';
</script>
