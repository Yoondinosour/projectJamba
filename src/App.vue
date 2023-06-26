<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header/Header.vue'

const scrollDirection = ref(0);
const waiting = ref(false);
const scrollTrace = ref(0);

function scrollHandler(e) {
  if(!waiting.value) {
    waiting.value = true;

    const currentScroll = window.scrollY;

    if(currentScroll > scrollTrace.value) scrollDirection.value = -1;
    else if (currentScroll < scrollTrace.value) scrollDirection.value = 1;
    scrollTrace.value = currentScroll;

    setTimeout(() => {
      waiting.value = false;
    }, 100)
  }
}

onMounted(() => {
  document.addEventListener('scroll', scrollHandler)
})

</script>

<template>
  <Header :scrollDirection="scrollDirection" />

  <RouterView />

</template>

<style lang="scss" scoped>

</style>