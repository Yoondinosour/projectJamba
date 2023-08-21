<template>
  <div class="container">
    <div class="line-wrap">
      <div class="line"></div>
    </div>

    <div class="box-wrap">
      <template v-for="box in boxData" :key="box.value" >
        <div class="box">
          {{ box.name }}
        </div>

        <p>{{ box.value }}</p>
      </template>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const boxData = reactive([
  { id: 1, name: 'box1', value: 1 },
  { id: 2, name: 'box2', value: 2 },
  { id: 3, name: 'box3', value: 3 },
  { id: 4, name: 'box4', value: 4 },
  { id: 5, name: 'box5', value: 5 },
])

</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 400px;
} 
.line-wrap {
  overflow: hidden;
  z-index: 1;
  height: calc(100% - 70px);
  position: absolute;
  left: 40px;
  .line {
    width: 1px;
    height: 100%;
    background: blue;
    transform: translateY(20px);
  }
}
  .box-wrap {
    padding: 60px;
    width: 400px;
    margin: 0 auto;
    .box {
      margin: 24px auto;
      width: 400px;
      height: 400px;
      background: #efefef;
      border-radius: 20px;
    }
    p {
      position: relative;
      text-align: left;
      &::before {
        position: absolute;
        content: '';
        width: 9px;
        height: 9px;
        background: blue;
        border-radius: 50%;
        transform: translateX(-50%);
        top: 10px;
        left: -20px;
      }
    }
  }
</style>