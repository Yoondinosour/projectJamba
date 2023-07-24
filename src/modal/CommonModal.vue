<template>
  <div class="modal-wrap" v-if="modalParams.isOpened">
    <div class="modal-content">
      <span @click="$emit('closeModal', false)" class="close-btn">&times;</span>
      <div class="title-wrap">
        <p>{{ modalParams.title }}</p>
      </div>

      <div class="content-wrap">
        <span>{{ modalParams.msg }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modalParams : {
    type: Object,
    default: {}
  }
})

const emits = defineEmits(['closeModal'])


document.addEventListener("click", function(event) {
  const modalWrap = document.querySelector('.modal-wrap')

  const targetElement = event.target;
  const isTarget = targetElement.classList.contains('modal-content') || targetElement.closest('.modal-content');

    if(isTarget) {
      return;
    }

    if(props.modalParams.closing && event.target === modalWrap) {
      props.modalParams.isOpened = false
    }
})
</script>

<style lang="scss" scoped>
.modal-wrap {
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .7);
}
.modal-content {
  background: #FFF;
  padding: 20px;
  margin: 15% auto;
  width: 500px;
  border-radius: 20px;
}
.close-btn {
  cursor: pointer;
  color: #AAA;
  float: right;
  padding: 10px 0;
  font-size: 28px;
  line-height: 0;
  font-weight: bold;
}
.title-wrap {
  padding-bottom: 8px;
  p {
    font-size: 18px;
    font-weight: 600;
  }
}
.content-wrap span {
  font-size: 14px;
  color: #444;
}
</style>