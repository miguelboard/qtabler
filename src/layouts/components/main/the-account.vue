<template>
  <q-btn flat rounded round color="dark">
    <t-icon
      outline-size="40px"
      inline-size="32px"
      size="20px"
      name="o_account_circle"
    ></t-icon>
    <q-menu auto-close class="the-account">
      <q-list class="the-account__list">
        <template
          v-for="(menu, index) in accountMenus"
          :key="index + '__the-account'"
        >
          <q-item clickable :to="menu.to">
            <q-item-section avatar>
              <t-icon
                outline-size="36px"
                inline-size="28px"
                size="16px"
                :name="menu.icon"
                :color="menu.color"
              ></t-icon>
            </q-item-section>
            <q-item-section :class="`text-${menu.color}`">
              {{ menu.name }}
            </q-item-section>
          </q-item>
          <q-separator v-if="menu.separator" insert></q-separator>
        </template>
      </q-list>
    </q-menu>
  </q-btn>
</template>
<script lang="ts" setup>
import { ROUTE_NAMES } from 'src/core/router/routes';
import { computed } from 'vue';

const accountMenus = computed(() => {
  return [
    {
      name: 'Status',
      icon: 'sym_o_podcasts',
      to: '',
      separator: false,
    },
    {
      name: 'Profile',
      icon: 'sym_o_admin_panel_settings',
      to: '',
      separator: false,
    },
    {
      name: 'Feedback',
      icon: 'sym_o_quick_phrases',
      to: '',
      separator: true,
    },
    {
      name: 'Setting',
      icon: 'sym_o_settings',
      to: '',
      separator: false,
    },
    {
      name: 'Logout',
      icon: 'sym_o_logout',
      to: { name: ROUTE_NAMES.AUTH_ROUTE_NAMES.AUTH_LOGIN },
      separator: false,
      color: 'negative',
    },
  ];
});
</script>
<style lang="scss">
.the-account {
  &__list {
    width: 140px;
  }
}
</style>
