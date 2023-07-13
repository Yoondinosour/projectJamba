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

<script>
import UtilMenu from './headerItem/UtilMenu.vue'
import NavMenuJS from './headerItem/NavMenuJS.vue'
import { computed } from 'vue'

export default {
  components: {
    UtilMenu,
    NavMenuJS
  },
  props: {
    scrollDirection: Boolean
  },
  setup(props) {
    const headerShownClass=computed(() => {
      if(props.scrollDirection) return 'sticky';
      return '';
    })
    return {
      headerShownClass
    }
  }

  // 스크롤이벤트 컴포넌트간 연결하는 방법
  // https://velog.io/@dmstmdrbs/Vue3-scroll-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EC%97%90-%EB%94%B0%EB%A5%B8-%ED%97%A4%EB%8D%94-%ED%91%9C%EC%8B%9C-with-Throttle
  

}
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