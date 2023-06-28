<template>
  <div class="visual">
    <img src="src/assets/main.png" alt="메인이미지" class="pc">
    <img src="src/assets/main_m.jpg" alt="메인이미지 모바일" class="mob">
    <div></div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.visual {
  width: 100%;
  background: url(src/assets/main_bg.png) center 0 repeat-x;
}
img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
}
.mob {
  display: none;
}

@media screen and (max-width: 1280px) {
  .visual {
    background-size: auto 100%;
    height: auto;
  }
}
@media screen and (max-width: 760px) {
  .pc {
    display: none;
  }
  .mob {
    display: block;
    width: 100%;
  }  
}
</style>