<template>
  <section>
    <div class="section-inner">
      <h2 class="sec-title">
        <span>our </span>menu
      </h2>
      <ul class="ourmenu d-flex justify-space-between">
        <li v-for="(menu, index) of menus" :key="index">
          <!-- <a :href="`src/assets/icons/menus/menu${index + 1}.png`">{{ menu.title }}</a> -->
          <a :href="menu.href">
            <span :style="`background-image: url(src/assets/icons/menus/menu${index + 1}.png)`" class="menu-img"></span>
            {{ menu.title }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { reactive } from "vue";

const menus = reactive([
  { title: 'Smoothie', href: '/menu/smoothie', icon: 'src/assets/icons/menus/menu1.png' },
  { title: 'Juice', href: '/menu/juice', icon: 'src/assets/icons/menus/menu2.png' },
  { title: 'Energy\r\nBowl', href: '/menu/energybowl', icon: 'src/assets/icons/menus/menu3.png' },
  { title: 'Coffee\r\n&Tea', href: '/menu/coffee', icon: 'src/assets/icons/menus/menu4.png' },
  { title: 'Premium\r\nRTD', href: '/menu/RTD', icon: 'src/assets/icons/menus/menu5.png' },
  { title: 'Fresh\r\nMeal&Bakery', href: '/menu/bakery', icon: 'src/assets/icons/menus/menu6.png' }
])

</script>
<style lang="scss" scoped>
h2 {
  font-size: 70px;
  color: #000;
  font-weight: 500;
  text-align: center;
  background: url(src/assets/bg_line_ourmenu.png) 50% 100% no-repeat;
}
ul {
  margin-top: 60px;
}
a {
  display: block;
  font-size: 22px;
  text-align: center;
  color: #000;
  font-weight: 600;
  white-space: pre-line;
}
.menu-img {
  display: block;
  min-width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  background-position: 50% 100%;
  background-repeat: no-repeat;
}
</style>