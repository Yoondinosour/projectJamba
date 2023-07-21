<template>
  <div class="container">
    <button @click="increment">더블 카운팅</button>

    <p>{{ name }}</p>
    <p>{{ doubleCount }}</p>

    <h1>{{ userStore.user }}</h1>
  </div>
</template>

<script setup>

import { storeToRefs } from 'pinia'
// import { useCounterStore, useUserStore } from '../stores/counter'
import { useCounterStore, useUserStore } from '../stores'

const store = useCounterStore()
// `name`과 `doubleCount`는 반응형 refs임.
// 이것은 플러그인에 의해 추가된 속성에 대한 'refs'도 추출함.
// 그러나 모든 액션 또는 비반응형(ref/반응형이 아닌) 속성을 건너뜀.
const { name, doubleCount } = storeToRefs(store)
// increment 액션은 그냥 구조화 가능.
const { increment } = store

const userStore = useUserStore()
// const { user } = storeToRefs(userStore)
</script>

<style lang="scss" scoped>
  
</style>