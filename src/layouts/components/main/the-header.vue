<template>
  <q-header>
    <q-toolbar class="bg-white text-dark border-bottom">
      <t-logo size="md" class="q-mb-none" />
      <q-space></q-space>
      <q-btn flat rounded round color="dark">
        <t-icon
          outline-size="40px"
          inline-size="32px"
          size="20px"
          name="sym_o_forum"
        ></t-icon>
      </q-btn>
      <the-notification></the-notification>
      <the-account></the-account>
    </q-toolbar>
  </q-header>
</template>
<script lang="ts" setup>
import TheAccount from 'src/layouts/components/main/the-account.vue';
import TheNotification from 'src/layouts/components/main/the-notification.vue';
</script>
