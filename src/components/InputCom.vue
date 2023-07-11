<template>
  <div class="input-wrap">
    <input :class="$attrs.class" :value="modelValue" @input="$emit('inputText', $event.target.value)" type="text">
  </div>
</template>
<script setup>
const props = defineProps({
	modelValue: {
    type: String,
    default: ''
	} 
})
const emits = defineEmits(['inputText'])

</script>
<style lang="scss" scoped>
.input-wrap {
  width: 400px;
  text-align: left;
  margin: auto;
}
input {
  width: 100%;
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  &.error {
    border-color: red;
  }
}
</style>