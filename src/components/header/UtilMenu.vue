<template>
  <div class="utilmenu">
    <a v-for="util of utilmenu" :key="util.icon" :href="util.href" :style="{ 'background-image': util.icon }">{{ util.title }}</a>
  </div>
</template>
<script setup>
  const utilmenu = [
    { title: 'Instagram', href: 'https://www.instagram.com/jambajuicekr/', icon: 'url(src/assets/icons/insta_icon.png)' },
    { title: 'Facebook', href: 'https://www.facebook.com/jambajuicekor/', icon: 'url(src/assets/icons/facebook_icon.png)' },
    { title: 'Happy Point', href: 'https://www.happypointcard.com/main/index.spc', icon: 'url(src/assets/icons/happy_icon.png)' },
    { title: 'Happy Market', href: 'https://www.daum.net', icon: 'url(src/assets/icons/market_icon.png)'},
    { title: 'Naver Store', href: 'https://smartstore.naver.com/jj_jambajuice_products', icon: 'url(src/assets/icons/naverStore_icon.png)' },
  ]
</script>
<style lang="scss" scoped>
.utilmenu {
  float: right;
  padding-top: 16px;
  a {
    padding-left: 26px;
    margin-left: 28px;
    font-size: 16px;
    color: #555;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: top 3px left;
  }
}
</style>