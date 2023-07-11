<template>
  <q-btn flat rounded round color="dark" @click="onToggleDrawer">
    <t-icon
      outline-size="40px"
      inline-size="32px"
      size="20px"
      name="sym_o_forum"
    ></t-icon>
  </q-btn>
  <q-drawer
    v-model="messageDrawerState"
    side="right"
    bordered
    overlay
    :width="360"
    :breakpoint="700"
  >
    <div class="q-px-md q-pt-md border-bottom">
      <div class="row justify-end items-center">
        <strong class="text-h6 q-my-none">Chat</strong>
        <q-space></q-space>
        <q-btn outline flat size="md" color="primary">Mark all as read</q-btn>
      </div>
      <q-tabs class="text-normal text-disable" model-value="all" :shrink="true">
        <q-tab name="all" label="All" class="text-normal text-weight-thin" />
        <q-tab name="read" label="Read" class="text-normal text-weight-thin" />
        <q-tab
          name="unread"
          label="Unread"
          class="text-normal text-weight-thin"
        />
        <q-tab
          name="peding"
          label="New messsage request"
          class="text-normal text-weight-thin"
        />
      </q-tabs>
    </div>
    <q-scroll-area class="fit" :thumb-style="{ width: '4px' }">
      <q-list separator>
        <q-item
          v-for="(noti, index) in 100"
          :key="index + '__the-notification'"
          class="text-dark"
          clickable
        >
          <q-item-section avatar top>
            <t-icon
              outline-size="36px"
              inline-size="28px"
              size="16px"
              name="sym_o_person"
            ></t-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Miguel DePaul</q-item-label>
            <q-item-label caption lines="2" class="text-disable"
              >Hey Miguel , Can we talk about next project.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
<script setup lang="ts">
import { ref } from 'vue';

// data
const messageDrawerState = ref(false);

// methods
function onToggleDrawer() {
  messageDrawerState.value = !messageDrawerState.value;
}
</script>
