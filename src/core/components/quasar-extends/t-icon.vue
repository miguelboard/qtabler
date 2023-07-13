<template>
  <q-avatar :size="outlineSize" :color="outlineColor">
    <q-avatar :size="inlineSize" :color="inlineColor">
      <q-icon :size="size" :name="name" :color="color"></q-icon>
    </q-avatar>
  </q-avatar>
</template>
<script lang="ts" setup>
withDefaults(
  defineProps<
    Partial<{
      outlineSize: string | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
      inlineSize: string | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
      size: string | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
      name: string;
      outlineColor: string;
      inlineColor: string;
      color: string;
    }>
  >(),
  {
    outlineColor: 'grey-1',
    inlineColor: 'grey-3',
    color: 'dark',
    name: 'space_dashboard',
    outlineSize: 'lg',
    inlineSize: 'md',
    size: 'sm',
  }
);
</script>
