<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    :mini="!drawer || miniState"
    :width="240"
    :breakpoint="500"
    bordered
    class="the-drawer"
  >
    <q-scroll-area
      :thumb-style="{
        right: '4px',
        borderRadius: '5px',
        backgroundColor: 'primary',
        width: '5px',
        opacity: '0.75',
      }"
      class="full-width text-weight-medium the-drawer__scroll-area"
    >
      <q-list padding>
        <template v-for="(menu, index) in menus" :key="index + '__the-drawer'">
          <q-expansion-item
            v-if="menu?.children?.length > 0"
            hide-expand-icon
            expand-separator
            :icon="menu.icon"
            :label="menu.name"
          >
            <template v-slot:header>
              <q-item dense class="q-pa-none full-width">
                <q-item-section avatar class="q-pr-none">
                  <t-icon
                    :name="menu.icon"
                    size="xs"
                    outline-color="grey-1"
                    inline-color="grey-3"
                    inline-size="26px"
                  ></t-icon>
                </q-item-section>

                <q-item-section class="flex-grow">
                  {{ menu.name }}
                </q-item-section>
                <q-item-section avatar class="q-pa-none q-mr-0">
                  <q-icon
                    name="sym_o_expand_more"
                    size="xs"
                    outline-color="grey-1"
                    inline-color="grey-3"
                    inline-size="26px"
                  ></q-icon>
                </q-item-section>
              </q-item>
            </template>
            <q-list>
              <q-item
                v-for="(child, childIndex) in menu.children"
                :key="childIndex + '__the-drawer-child'"
                clickable
                v-ripple
                :to="{ name: child.to }"
                active-class="bg-grey-1"
              >
                <q-item-section avatar class="q-pr-none">
                  <!-- <t-icon
                    :name="child.icon"
                    size="xs"
                    outline-color="grey-1"
                    inline-color="grey-3"
                    inline-size="26px"
                  ></t-icon> -->
                </q-item-section>

                <q-item-section> {{ child.name }} </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-item
            v-else
            clickable
            v-ripple
            :to="{ name: menu.to }"
            active-class="bg-grey-1"
          >
            <q-item-section avatar class="q-pr-none">
              <t-icon
                :name="menu.icon"
                size="xs"
                outline-color="grey-1"
                inline-color="grey-3"
                inline-size="26px"
              ></t-icon>
            </q-item-section>

            <q-item-section> {{ menu.name }} </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-scroll-area>
    <q-item dense clickable class="full-width text-negative">
      <q-item-section avatar clickable class="q-pa-none">
        <t-icon
          name="sym_o_logout"
          size="xs"
          color="negative"
          outline-color="grey-1"
          inline-color="grey-3"
          inline-size="26px"
        ></t-icon>
      </q-item-section>
      <q-item-section> Logout </q-item-section>
    </q-item>
    <div class="absolute" style="bottom: 15px; right: -17px">
      <q-btn
        dense
        round
        flat
        unelevated
        color="primary"
        :icon="miniState ? 'chevron_right' : 'chevron_left'"
        class="bg-blue-1"
        @click="miniState = !miniState"
      />
    </div>
  </q-drawer>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { ROUTE_NAMES } from 'src/core/router/routes';
interface Menu {
  name: string;
  icon: string;
  to: string;
  visibled: boolean;
  children: Menu[];
}
//data
const miniState = ref(false);
const drawer = ref(false);

const menus = computed<Menu[]>(() => {
  return [
    {
      name: 'Dashboard',
      icon: 'sym_o_dashboard',
      to: ROUTE_NAMES.LANDING_PAGE,
      visibled: false,
      children: [],
    },
    {
      name: 'Shedules',
      icon: 'sym_o_event_note',
      to: ROUTE_NAMES.LANDING_PAGE,
      visibled: false,
      children: [],
    },
    {
      name: 'Ads Center',
      icon: 'sym_o_view_in_ar',
      to: ROUTE_NAMES.LANDING_PAGE,
      visibled: false,
      children: [],
    },
    {
      name: 'Company',
      icon: 'sym_o_corporate_fare',
      to: ROUTE_NAMES.LANDING_PAGE,
      visibled: false,
      children: [],
    },
    {
      name: 'Candidate',
      icon: 'sym_o_measuring_tape',
      to: ROUTE_NAMES.LANDING_PAGE,
      visibled: false,
      children: [],
    },
    {
      name: 'Jobs Center',
      icon: 'sym_o_work',
      to: ROUTE_NAMES.LANDING_PAGE,
      visibled: false,
      children: [
        {
          name: 'Order',
          icon: 'sym_o_storefront',
          to: ROUTE_NAMES.LANDING_PAGE,
          visibled: false,
          children: [],
        },
        {
          name: 'Invoice',
          icon: 'sym_o_receipt_long',
          to: ROUTE_NAMES.LANDING_PAGE,
          visibled: false,
          children: [],
        },
      ],
    },
    {
      name: 'Payment',
      icon: 'sym_o_shopping_bag',
      to: ROUTE_NAMES.LANDING_PAGE,
      visibled: false,
      children: [
        {
          name: 'Order',
          icon: 'sym_o_storefront',
          to: ROUTE_NAMES.LANDING_PAGE,
          visibled: false,
          children: [],
        },
        {
          name: 'Invoice',
          icon: 'sym_o_receipt_long',
          to: ROUTE_NAMES.LANDING_PAGE,
          visibled: false,
          children: [],
        },
      ],
    },
    {
      name: 'Customer',
      icon: 'sym_o_group',
      to: ROUTE_NAMES.LANDING_PAGE,
      visibled: false,
      children: [
        {
          name: 'Dashboard',
          icon: 'sym_o_dashboard',
          to: ROUTE_NAMES.LANDING_PAGE,
          visibled: false,
          children: [],
        },
      ],
    },
  ];
});
</script>
<style lang="scss">
.the-drawer {
  .q-item__section--avatar {
    min-width: 44px;
  }
  .q-item__section--main {
    font-weight: 600;
  }
  &__scroll-area {
    height: calc(100% - 42px);
  }
}
</style>
