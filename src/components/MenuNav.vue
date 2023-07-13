<template>
  <div class="menunav-wrap">
    <div class="title-wrap">
      <p>Jamba Menu</p>
    </div>

    <div class="content-wrap d-flex flex-direction-column">
      <a v-for="menu of menus" :key="menu.subtitle" :href="menu.href">{{ menu.subtitle }}</a>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";

const menus = reactive([
    { subtitle: '스무디', href: '/menu/smoothie' },
    { subtitle: '에너지볼', href: '/menu/energybowl' },
    { subtitle: 'RTD주스', href: '/menu/rtd' },
    { subtitle: '주스', href:'/menu/juice' },
    { subtitle: '커피&차', href: '/menu/coffee' },
    { subtitle: '베이커리', href: '/menu/bakery' }
  ])
</script>
<style lang="scss" scoped>
.menunav-wrap {
  width: 280px;
  text-align: center;
  background: #ffe9be;
  border-radius: 10px;
  overflow: hidden;
}
.title-wrap {
  background: #116f57;
  padding: 20px;
  p {
    font-size: 28px;
    line-height: 28px;
    font-weight: 700;
    color: #FFF;
  }
}
.content-wrap {
  a {
    padding: 12px 20px;
    color: #565656;
    font-weight: 600;
    font-size: 18px;
    &:hover {
      background: #ffcf6f;
      color: #116f57;
    }
  }
}
</style>