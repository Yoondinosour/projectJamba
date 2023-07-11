<template>
  <div class="container">
    <div class="login-bg">
      <h1>Orange Mango Login</h1>

      <label :class="{error: !idValid}">아이디</label>
      <InputCom :modelValue="inputID" @inputText="val => inputID = val" :class="{error: !idValid}">아이디</InputCom>
      <span v-if="inputID == '' && !idValid">* ID를 확인하시기 바랍니다.</span>
      <br />
      <label :class="{error: !pwValid}">비밀번호</label>
      <InputCom :modelValue="inputPW" @inputText="val => inputPW = val" :class="{error: !pwValid}">패스워드</InputCom>
      <span v-if="inputPW == '' && !pwValid">* 비밀번호를 확인하시기 바랍니다.</span>
      <br />
    </div>

    <button @click="doLogin">로그인</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputCom from '../components/InputCom.vue';

const inputID = ref('');
const inputPW = ref('');

const idValid = ref(false);
const pwValid = ref(false);

function doLogin() {
  if(inputID.value !== '') {
    idValid.value = true
  } else idValid.value = false

  if(inputPW.value !== '') {
    pwValid.value = true
  } else pwValid.value = false

  console.log(idValid.value, pwValid.value)
}

</script>

<style lang="scss" scoped>
.login-bg {
  max-width: 400px;
  margin: auto;
  text-align: left;
}
h1 {
  text-align: center;
  margin-bottom: 40px;
  font-weight: 900;
  color: orange;
}
label {
  display: block;
  font-size: 16px;
  color: #5a5a5a;
  font-weight: 600;
  &.error {
    color: red;
  }
}
span {
  color: red;
  padding-left: 12px;
  font-size: 12px;
}
button {
  margin: 16px 0;
  max-width: 400px;
  width: 100%;
  font-size: 24px;
  background: #7db489;
  border: none;
  border-radius: 5px;
  padding: 20px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
</style>