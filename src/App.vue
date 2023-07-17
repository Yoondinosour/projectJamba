<template>
  <Header :scrollDirection="scrollDirection" />

  <RouterView />

</template>

<script setup>
import { onMounted, ref } from 'vue'
import Header from './components/header/Header.vue'

const scrollDirection = ref(false);

function scrollHandler() {
    const currentScroll = window.scrollY;

    if(currentScroll > 10) scrollDirection.value = true;
    else if (currentScroll < 10) scrollDirection.value = false;
}

onMounted(() => {
  document.addEventListener('scroll', scrollHandler)
})

</script>

<style lang="scss" scoped>

</style>