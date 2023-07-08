<template>
  <q-header light>
    <q-toolbar class="bg-white border-bottom">
      <t-logo size="md" class="q-mb-none" />
      <q-space></q-space>
      <q-btn flat rounded round color="dark">
        <q-avatar size="40px" color="grey-1">
          <q-avatar size="32px" color="grey-2">
            <q-icon size="20px" name="sym_o_forum"></q-icon>
          </q-avatar>
        </q-avatar>
      </q-btn>
      <q-btn flat rounded round color="dark">
        <q-avatar size="40px" color="grey-1">
          <q-avatar size="32px" color="grey-2">
            <q-icon size="24px" name="sym_o_notifications"></q-icon>
          </q-avatar>
        </q-avatar>
      </q-btn>
      <the-account></the-account>
    </q-toolbar>
  </q-header>
</template>
<script lang="ts" setup>
import TheAccount from 'src/layouts/components/main/the-account.vue';
</script>
