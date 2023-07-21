import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // ref() -> state
  // computed() -> getters
  // function() -> actions

  //store를 반응형으로 사용하려면, 사용하는 컴포넌트에서 storeToRefs를 이용해야 함.
  // import { storeToRefs } from "pinia";

  const count = ref(0)
  const name = ref('seang')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})
