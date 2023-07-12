<template>
  <div class="container">
    <MenuNav />
    <router-view />
  </div>
</template>

<script setup>
import MenuNav from "../components/MenuNav.vue";
</script>

<style lang="scss" scoped>
.container {
  max-width: 1280px;

}
</style>