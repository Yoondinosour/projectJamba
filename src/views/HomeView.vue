<template>
  <div class="visual">
    <img src="src/assets/main.png" alt="메인이미지" class="pc">
    <img src="src/assets/main_m.jpg" alt="메인이미지 모바일" class="mob">
    <div></div>
  </div>

  <SelectCom :selectItems="selectItems" @selectItem="val => selectItem = val">당신의 성별을 골라주세요</SelectCom>
  <br/>
  <p v-if="selectItem">당신이 선택한 옵션은 "{{ selectItem.label }}" 입니다.</p>
  <p v-else>옵션을 선택해주시기 바랍니다.</p>
  
  <MenuView></MenuView>

</template>
<script setup>
import { reactive, ref } from 'vue';
import MenuView from '../components/section/MenuView.vue';
import SelectCom from '../components/SelectCom.vue';

// const props = defineProps({
// 	propsItem: {

// 	} 
// })

const selectItems = reactive([
  { label: '남성', value: 'male' },
  { label: '여성', value: 'female' },
  { label: '중성', value: 'both' },
  { label: '모름', value: 'unknown' },
  { label: '기타', value: 'etc' },
])

const selectItem = ref('');


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
p {
  text-align: center;
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