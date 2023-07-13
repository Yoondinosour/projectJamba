<template>
  <div class="nav-container d-flex justify-center">
    <MenuNav />
    <router-view />
  </div>
</template>

<script setup>
import MenuNav from "../components/MenuNav.vue";
</script>

<style lang="scss" scoped>
</style>