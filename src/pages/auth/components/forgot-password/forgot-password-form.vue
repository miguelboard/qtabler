<template>
  <div class="forgot-password-form column justify-center items-center">
    <t-logo class="q-mb-lg"></t-logo>
    <q-card
      flat
      bordered
      class="forgot-password-form__card q-pa-md rounded-default"
    >
      <q-card-section class="q-py-md column justify-center items-center">
        <h6 class="text-h6 q-ma-none text-center text-weight-bold q-mb-md">
          Forgot password
        </h6>
        <span class="text-disable"
          >Enter your email address and your password will be reset and emailed
          to you.</span
        >
      </q-card-section>
      <q-card-section class="column justify-start">
        <t-input
          v-model="form.email"
          type="email"
          label="Email address"
          placeholder="example@gmail.com"
        >
        </t-input>
      </q-card-section>
      <q-card-actions class="q-pa-md column justify-start items-stretch">
        <q-btn unelevated color="primary">
          <q-icon size="xs" name="sym_o_email" class="q-mr-xs"></q-icon>
          Send me new password
        </q-btn>
      </q-card-actions>
    </q-card>
    <div class="row justify-center items-center">
      Forget it
      <q-btn
        :to="{ name: ROUTE_NAMES.AUTH_ROUTE_NAMES.AUTH_LOGIN }"
        flat
        class="q-pa-xs"
        color="primary"
        >send me back</q-btn
      >
      to the sign in screen.
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { ROUTE_NAMES } from 'src/router/routes';

const form = reactive({
  email: '',
});
</script>

<style lang="scss">
.forgot-password-form {
  &__card {
    min-width: 300px;
    max-width: calc(100vw - 48px);
    width: 420px;
  }
}
</style>
