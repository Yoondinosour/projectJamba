import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  // ref() -> state
  // computed() -> getters
  // function() -> actions

  //store를 반응형으로 사용하려면, 사용하는 컴포넌트에서 storeToRefs를 이용해야 함.
  // import { storeToRefs } from "pinia";

  const user = ref('seayoung')

  return { user }
})