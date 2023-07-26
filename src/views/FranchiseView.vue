<template>
  <div class="container">
    <div v-if="state.account.id">
      <p>안녕하세요?? {{ state.account.name }}님!</p>
      <button @click="logout">로그아웃</button>
    </div>

    <div v-else>
      <label>아이디</label>
      <input type="text" id="loginId" v-model="state.form.loginId" />

      <label>비밀번호</label>
      <input type="text" id="loginPw" v-model="state.form.loginPw"/>
      <button @click="submit">클릭!</button>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { reactive } from "vue";

const state = reactive({
  account: {
    id: null,
    name: ""
  },
  form: {
    loginId: "",
    loginPw: ""
  }
})

axios.get("/api/account").then((res) => {
  state.account = res.data;
})

function submit() {
  
  const args = {
    loginId: state.form.loginId,
    loginPw: state.form.loginPw
  }
  axios.post("/api/account", args).then((res) => {
    alert("로그인에 성공했습니다.");

    state.account = res.data
  }).catch(() => {
    alert("로그인에 실패했습니다.")
  })
}

function logout() {
  axios.delete("/api/account").then(() => {
    alert("로그아웃하였습니다.")
    state.account.id = null;
    state.account.name = "";
  })
}
</script>
<style lang="scss" scoped>
button {
  margin-top: 32px;
  display: block;
  margin: 30px auto;
}
</style>