<template>
  <q-card flat class="t-schedule">
    <slot name="title">
      <q-card-section>
        <strong class="text-center text-body1 text-weight-bold"
          >Select a Date & Time</strong
        >
      </q-card-section>
    </slot>
    <q-card-section horizontal>
      <div class="q-col-gutter-md row justify-between items-stretch">
        <div class="col-12 col-md-8">
          <q-date
            flat
            minimal
            v-bind="$attrs"
            mask="dddd, MMM D, YYYY"
            v-model="dateModel.date"
            class="full-width"
            @@update:model-value="emits('select-date')"
          />
        </div>
        <div class="col-12 col-md-4 justify-start items-stretch">
          <div class="q-pa-md">
            <div class="q-mb-md q-pt-xs">
              {{ dateModel.date }} {{ dateModel.time }}
            </div>
            <q-scroll-area
              :thumb-style="{
                right: '0px',
                borderRadius: '5px',
                backgroundColor: 'primary',
                width: '5px',
                opacity: '0.75',
              }"
              class="t-schedule__time q-pr-sm"
            >
              <div
                v-for="(time, index) in timeBlocks"
                :key="index + '__time-block'"
                class="q-mb-sm full-width"
              >
                <q-btn
                  :outline="time.label !== dateModel.time"
                  unelevated
                  color="primary"
                  class="full-width text-weight-bold"
                  @click="onSelectTime(time.label)"
                >
                  {{ time.label }}
                </q-btn>
              </div>
            </q-scroll-area>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  modelValue: {
    date: Date | string;
    time: number | string;
  };
}>();
const emits = defineEmits(['update:modelValue', 'select-date', 'select-time']);

// computed
const timeBlocks = computed(() => {
  return [
    {
      label: '00:00',
      value: 0,
    },
    {
      label: '00:30',
      value: 30,
    },
    {
      label: '01:00',
      value: 60,
    },
    {
      label: '01:30',
      value: 90,
    },
    {
      label: '02:00',
      value: 120,
    },
    {
      label: '02:30',
      value: 150,
    },
    {
      label: '03:00',
      value: 180,
    },
    {
      label: '03:30',
      value: 210,
    },
    {
      label: '04:00',
      value: 240,
    },
    {
      label: '04:30',
      value: 270,
    },
    {
      label: '05:00',
      value: 300,
    },
    {
      label: '05:30',
      value: 330,
    },
    {
      label: '06:00',
      value: 360,
    },
    {
      label: '06:30',
      value: 390,
    },
    {
      label: '07:00',
      value: 420,
    },
    {
      label: '07:30',
      value: 450,
    },
    {
      label: '08:00',
      value: 480,
    },
    {
      label: '08:30',
      value: 510,
    },
    {
      label: '09:00',
      value: 540,
    },
    {
      label: '09:30',
      value: 570,
    },
    {
      label: '10:00',
      value: 600,
    },
    {
      label: '10:30',
      value: 630,
    },
    {
      label: '11:00',
      value: 660,
    },
    {
      label: '11:30',
      value: 690,
    },
    {
      label: '12:00',
      value: 720,
    },
    {
      label: '12:30',
      value: 750,
    },
    {
      label: '13:00',
      value: 780,
    },
    {
      label: '13:30',
      value: 810,
    },
    {
      label: '14:00',
      value: 840,
    },
    {
      label: '14:30',
      value: 870,
    },
    {
      label: '15:00',
      value: 900,
    },
    {
      label: '15:30',
      value: 930,
    },
    {
      label: '16:00',
      value: 960,
    },
    {
      label: '16:30',
      value: 990,
    },
    {
      label: '17:00',
      value: 1020,
    },
    {
      label: '17:30',
      value: 1050,
    },
    {
      label: '18:00',
      value: 1080,
    },
    {
      label: '18:30',
      value: 1110,
    },
    {
      label: '19:00',
      value: 1140,
    },
    {
      label: '19:30',
      value: 1170,
    },
    {
      label: '20:00',
      value: 1200,
    },
    {
      label: '20:30',
      value: 1230,
    },
    {
      label: '21:00',
      value: 1260,
    },
    {
      label: '21:30',
      value: 1290,
    },
    {
      label: '22:00',
      value: 1320,
    },
    {
      label: '22:30',
      value: 1350,
    },
    {
      label: '23:00',
      value: 1380,
    },
    {
      label: '23:30',
      value: 1410,
    },
  ];
});

const dateModel = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emits('update:modelValue', newValue);
  },
});
// methods
function onSelectTime(time: string) {
  dateModel.value.time = time;
  emits('select-time', time);
}
</script>
<style lang="scss">
.t-schedule {
  &__time {
    min-height: 300px;
    height: 300px;
    min-width: 100px;
    width: 100%;
  }
}
</style>
