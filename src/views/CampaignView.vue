<template>
  <div class="container">
    <h2>무슨 이벤트를 하는지 보고 싶다면??</h2>
    <button @click="showModal" class="btn-campaign">이벤트 살펴보기</button>
  </div>

  <teleport to="#modal">
    <Modal :modalParams="store.modalParams" @closeModal="val => store.modalParams.isOpened = val" />
  </teleport>

</template>

<script setup>
import { useModalStore } from '../stores'

const store = useModalStore()

function showModal() {
  store.modalParams = { isOpened:true, title: '이벤트 알림', msg: '표시할 이벤트가 없습니다!!', closing: true }
}

</script>

<style lang="scss" scoped>
.container {
  margin-top: 60px;
}
h2 {
  margin-bottom: 12px;
}
</style>