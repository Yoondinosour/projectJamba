<template>
  <header :class="headerShownClass">
    <div class="container">
      <div class="logo">
        <a href="/"><img src="@/assets/logo.png" alt="잠바주스 로고"></a>
      </div>

      <UtilMenu></UtilMenu>

      <NavMenuJS></NavMenuJS>
      
    </div>
  </header>
</template>

<script setup>
import UtilMenu from './headerItem/UtilMenu.vue'
import NavMenuJS from './headerItem/NavMenuJS.vue'
import { computed } from 'vue'

const props = defineProps({
	scrollDirection: {
    type: Boolean,
    default: false
  }
})

const headerShownClass = computed(() => {
  if(props.scrollDirection) return 'sticky';
  return '';
})
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  background: #FFF;
  z-index: 2;
  &.sticky {
    box-shadow: 0 0 1rem rgba(0,0,0,0.4);
  }
}
.container {
  max-width: 1280px;
  position: relative;
  margin: 0 auto;
  height: 158px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.logo {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
}


</style>