import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const modalParams = ref(
    { isOpened: false, title: '', msg: '', modalItem: {}, closing: false }
  )

  return { modalParams}
})