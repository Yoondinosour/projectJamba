<template>
  <div class="select-container">
    <label>
      <slot></slot>
    </label>

    <div class="select" @click="activeDropDown" :class="{active: actived}">
      <div class="selected">
        <span>{{ selectValue }}</span>
      </div>
      <ul class="dropdown-menu">
        <li v-for="item of selectItems" :key="item.value" class="option" @click="$emit('selectItem', item)">{{ item.label }}</li>
      </ul>
    </div>

  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
	selectItems: {
    type: Array,
    default: []
  }
})

const selectValue = ref('선택해주세요');
const actived = ref(false);

//드롭다운 메뉴 실행
function activeDropDown(event) {
  const targetElement = event.target
  const isOptionElement = targetElement.classList.contains("option");

  if(isOptionElement) {
    selectOption(targetElement);
  }

  actived.value = !actived.value
}

//선택한 옵션의 value를 보여주기
function selectOption(targetElement) {
  selectValue.value = targetElement.textContent
}

//다른 곳 클릭 시 드롭다운메뉴 사라지기
document.addEventListener("click", function(event) {
  const targetElement = event.target;
  const isSelect = targetElement.classList.contains('select') || targetElement.closest('.select');

  if(isSelect) {
    return;
  }

  actived.value = false
})


</script>

<style lang="scss" scoped>
.select-container {
  width: 500px;
  margin: 0 auto;
  text-align: center;
}
.select {
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 0 2px rgb(204,204,204);
  transition: height .5s ease-in-out;
  position: relative;
  height: 100%;
}
.selected {
  display: block;
  cursor: pointer;
  &.active {
    background: #f8f8f8;
  }
}
.select .dropdown-menu {
  height: 0;
  overflow: hidden;
  transition: height .5s ease-in-out;
  border: none;
  width: 500px;
  position: absolute;
  z-index: 2;
  background: #FFF;
  margin-top: 1px;
  li:hover {
    background: #efefef;
    cursor: pointer;
  }
}
.select.active .dropdown-menu {
    border: 1px solid #efefef;
    height: 100px;
    z-index: 1;
    transition: height .5s ease-in-out;
    overflow: scroll;
    border-radius: 0 0 5px 5px;
    margin-top: 1px;
    border-top: none;
  }
</style>