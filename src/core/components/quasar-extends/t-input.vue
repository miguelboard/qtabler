<template>
  <q-input v-model="modelValue" outlined dense stack-label v-bind="$attrs">
  </q-input>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  modelValue: string | number;
}>();
const emits = defineEmits(['update:modelValue']);
const modelValue = computed({
  get() {
    return props.modelValue;
  },
  set(value: string | number) {
    emits('update:modelValue', value);
  },
});
</script>
