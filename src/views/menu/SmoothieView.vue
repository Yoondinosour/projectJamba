<template>
  <section class="menu-section">
    Smoothie Page

    <Select :selectItems="selectItems" @selectItem="val => selectItem = val">당신의 원픽 스무디를 골라주세요</Select>
    <br/>
    <p v-if="selectItem">당신이 선택한 최고의 스무디는 <span>"{{ selectItem.label }}"</span> 입니다.</p>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";

const selectItems = reactive([
  { label: '플레인스무디', value: 'plain' },
  { label: '망고스무디', value: 'mango' },
  { label: '수박스무디', value: 'watermelon' },
  { label: '복숭아스무디', value: 'peach' },
  { label: '청포도스무디', value: 'greengrape' },
  { label: '홍시스무디', value: 'persimmon' },
])

const selectItem = ref('');

</script>

<style lang="scss" scoped>
p {
  text-align: center;
  font-size: 18px;
  span {
    color: #116f57;
  }
}
</style>