<template>
  <div class="login-form column justify-center items-center">
    <t-logo class="q-mb-lg" to="/"></t-logo>
    <q-card flat bordered class="login-form__card q-pa-md rounded-default">
      <q-card-section class="q-py-md">
        <h6 class="text-h6 q-ma-none text-center text-weight-bold">
          Login to your account
        </h6>
      </q-card-section>
      <q-card-section class="column justify-start">
        <t-input
          v-model="form.email"
          type="email"
          label="Email address"
          placeholder="example@gmail.com"
          class="q-mb-md"
        >
        </t-input>
        <div class="row justify-end">
          <q-btn
            :to="{ name: ROUTE_NAMES.AUTH_ROUTE_NAMES.FORGOT_PASSWORD }"
            flat
            color="primary"
            class="align-end"
            >I forgot password</q-btn
          >
        </div>
        <t-input
          v-model="form.password"
          type="password"
          label="Password"
          placeholder="************"
          class="q-mb-md"
        >
        </t-input>
        <q-checkbox dense v-model="form.remember"
          >Remember me on this device</q-checkbox
        >
      </q-card-section>
      <q-card-actions class="q-pa-md column justify-start items-stretch">
        <q-btn unelevated color="primary">Signin</q-btn>
        <q-separator class="q-my-md">Or</q-separator>
        <div class="flex justify-between items-center q-gutter-x-sm">
          <q-btn outline disabled class="flex-grow text-disable"
            >Login with Github</q-btn
          >
          <q-btn outline disabled class="flex-grow text-disable"
            >Login with Twitter</q-btn
          >
        </div>
      </q-card-actions>
    </q-card>
    <div class="row justify-center items-center">
      Don't have account yet?
      <q-btn
        :to="{ name: ROUTE_NAMES.AUTH_ROUTE_NAMES.AUTH_REGISTER }"
        flat
        class="q-pa-xs"
        color="primary"
        >Sign up</q-btn
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { ROUTE_NAMES } from 'src/core/router/routes';

const form = reactive({
  email: '',
  password: '',
  remember: false,
});
</script>

<style lang="scss">
.login-form {
  &__card {
    min-width: 300px;
    max-width: calc(100vw - 48px);
    width: 420px;
  }
}
</style>
