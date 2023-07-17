<template>
  <div class="nav-container d-flex justify-center">
    <MenuNav @changeComp="val => changeComp(val)" />
    <!-- <router-view /> -->
    
    <!-- <keep-alive> -->
      <component :is="menuName"></component>
    <!-- </keep-alive> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import MenuNav from "../components/MenuNav.vue";

import Juice from "../views/menu/JuiceView.vue";
import Coffee from "../views/menu/CoffeeView.vue";
import Bakery from "../views/menu/BakeryView.vue";
import Rtd from "../views/menu/RTDView.vue";
import Smoothie from "../views/menu/SmoothieView.vue";
import Energybowl from "../views/menu/EnergyBowl.vue";

const menuName = Smoothie;

function changeComp(compName) {
  this.menuName = eval(compName)
}
</script>

<style lang="scss" scoped>
</style>