<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppNav from './components/AppNav.vue';
</script>

<template>
  <AppHeader/>
  <AppNav/>
  <RouterView />
  <AppFooter/>
</template>

<style scoped>

</style>
