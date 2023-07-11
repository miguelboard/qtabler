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
    <q-card class="column justify-start items-stretch full-height no-wrap">
      <q-card-section class="q-px-none">
        <div class="q-px-md border-bottom">
          <div class="row justify-end items-center">
            <strong class="text-h6 q-my-none text-weight-bold">Chat</strong>
            <q-space></q-space>
            <q-btn outline flat size="md" color="primary"
              >Mark all as read</q-btn
            >
          </div>
          <q-tabs
            class="text-normal text-disable"
            model-value="all"
            :mobile-arrows="false"
            :shrink="true"
          >
            <q-tab
              name="all"
              label="All"
              class="text-normal text-weight-thin"
            />
            <q-tab
              name="read"
              label="Read"
              class="text-normal text-weight-thin"
            />
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
      </q-card-section>
      <q-card-section
        class="col-grow q-px-none"
        v-if="currentViewMode === 'LIST'"
      >
        <q-scroll-area class="fit q-px-md" :thumb-style="{ width: '4px' }">
          <q-list separator>
            <q-item
              v-for="(noti, index) in 100"
              :key="index + '__the-notification'"
              class="text-dark"
              clickable
              @click="onToggleRoom"
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
      </q-card-section>
      <template v-else>
        <q-card-section class="col-grow q-px-none">
          <q-scroll-area class="fit q-px-md" :thumb-style="{ width: '4px' }">
            <q-chat-message
              :text="['hey, how are you?']"
              v-for="i in 100"
              :key="i"
              :sent="i % 2 === 0"
              bg-color="grey-1"
              text-color="dark"
            />
          </q-scroll-area>
        </q-card-section>
        <q-card-section class="column justify-start items-stretch q-px-sm">
          <q-input
            textarea
            placeholder="Enter your message..."
            outlined
            :model-value="form.message"
          ></q-input>
          <div class="row justify-end items-end q-py-sm">
            <q-btn unelevated size="md" color="primary" class="q-px-md"
              >Send</q-btn
            >
          </div>
        </q-card-section>
      </template>
    </q-card>
  </q-drawer>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';

// data
const messageDrawerState = ref(false);
const currentViewMode = ref<'LIST' | 'ROOM'>('LIST');
const form = reactive({
  message: '',
});
// methods
function onToggleDrawer() {
  messageDrawerState.value = !messageDrawerState.value;
}
function onToggleRoom() {
  currentViewMode.value = currentViewMode.value === 'LIST' ? 'ROOM' : 'LIST';
}
</script>
