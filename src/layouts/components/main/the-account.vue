<template>
  <q-btn flat rounded round color="dark">
    <q-avatar size="40px" color="grey-1">
      <q-avatar size="32px" color="grey-2">
        <q-icon size="20px" name="o_account_circle"></q-icon>
      </q-avatar>
    </q-avatar>
    <q-menu auto-close class="the-account">
      <q-list class="the-account__list">
        <q-item clickable>
          <q-item-section> Status </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section> Profile </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section> Feedback </q-item-section>
        </q-item>
        <q-separator insert></q-separator>
        <q-item clickable>
          <q-item-section> Setting </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section> Logout </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>
<style lang="scss">
.the-account {
  &__list {
    width: 140px;
  }
}
</style>
