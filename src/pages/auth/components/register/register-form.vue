<template>
  <div class="register-form column justify-center items-center">
    <t-logo class="q-mb-lg"></t-logo>
    <q-card flat bordered class="register-form__card q-pa-md rounded-default">
      <q-card-section class="q-py-md">
        <h6 class="text-h6 q-ma-none text-center text-weight-bold">
          Create new account
        </h6>
      </q-card-section>
      <q-card-section class="column justify-start">
        <t-input
          v-model="form.name"
          type="text"
          label="Full name"
          placeholder="Asley Clack"
          class="q-mb-md"
        >
        </t-input>
        <t-input
          v-model="form.email"
          type="email"
          label="Email address"
          placeholder="example@gmail.com"
          class="q-mb-md"
        >
        </t-input>
        <t-input
          v-model="form.password"
          type="password"
          label="Password"
          placeholder="************"
          class="q-mb-md"
        >
        </t-input>
        <t-input
          v-model="form.confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="************"
          class="q-mb-md"
        >
        </t-input>
        <q-checkbox dense v-model="form.agree"
          >Agree the term and policy</q-checkbox
        >
      </q-card-section>
      <q-card-actions class="q-pa-md column justify-start items-stretch">
        <q-btn unelevated color="primary">Register</q-btn>
        <q-separator class="q-my-md">Or</q-separator>
        <div class="flex justify-between items-center q-gutter-x-sm">
          <q-btn outline disabled class="flex-grow text-disable"
            >Register with Github</q-btn
          >
          <q-btn outline disabled class="flex-grow text-disable"
            >Register with Twitter</q-btn
          >
        </div>
      </q-card-actions>
    </q-card>
    <div class="row justify-center items-center">
      Already have account?
      <q-btn
        :to="{ name: ROUTE_NAMES.AUTH_ROUTE_NAMES.AUTH_LOGIN }"
        flat
        class="q-pa-xs"
        color="primary"
        >Sign in</q-btn
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { ROUTE_NAMES } from 'src/router/routes';
const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agree: false,
});
</script>

<style lang="scss">
.register-form {
  &__card {
    min-width: 300px;
    max-width: calc(100vw - 48px);
    width: 420px;
  }
}
</style>
