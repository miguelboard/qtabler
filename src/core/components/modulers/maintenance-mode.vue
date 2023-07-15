<template>
  <div class="mantenance-mode-form column justify-center items-center">
    <t-logo class="q-mb-lg" to="/"></t-logo>
    <q-card
      flat
      bordered
      class="mantenance-mode-form__card q-pa-md rounded-default"
    >
      <q-card-section class="q-py-md column justify-center items-center">
        <h6 class="text-h6 q-ma-none text-center text-weight-bold q-mb-md">
          Hang on...
        </h6>
        <span class="text-disable text-center"
          >We are under maintenance. <br />
          It take a longtime to build. Please go back later.</span
        >
      </q-card-section>
      <q-card-actions class="q-pa-md column justify-start items-stretch">
        <q-btn unelevated color="primary" :to="{ name: ROUTE_NAMES.HOME_PAGE }">
          Back to home page
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { ROUTE_NAMES } from 'src/core/router/routes';
</script>

<style lang="scss">
.mantenance-mode-form {
  &__card {
    min-width: 300px;
    max-width: calc(100vw - 48px);
    width: 420px;
  }
}
</style>
