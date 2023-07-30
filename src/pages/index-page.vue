<template>
  <q-page class="row items-center justify-evenly q-pa-lg">
    <!-- <t-window
      name="window_panel"
      title="Hello"
      sub-title="Welcome to window feature!"
      class="window_panel"
    >
      <q-list bordered separator class="rounded-borders">
        <q-item clickable v-ripple>
          <q-item-section>Single line item</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>Item with caption</q-item-label>
            <q-item-label caption>Caption</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label overline>OVERLINE</q-item-label>
            <q-item-label>Item with caption</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <template v-slot:footer>
        <q-space></q-space>
        <q-btn unelevated color="primary" class="q-px-lg">Save</q-btn>
      </template>
    </t-window> -->
    <t-schedule style="width: 600px" v-model="dateTime"> </t-schedule>
  </q-page>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

const dateTime = reactive({
  date: new Date().toDateString(),
  time: '00:00',
});
</script>
<style lang="scss" setup>
.window_panel {
  min-width: 500px;
}
</style>
