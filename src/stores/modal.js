import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const modalParams = ref(
    { isOpened: false, title: '', msg: '', modalItem: {}, closing: false }
  )

  function showModal(data) {
    modalParams = data
  }

  return { modalParams, showModal }
})