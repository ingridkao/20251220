<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const account = ref('')
const password = ref('')
const login = () => {
  const result = userStore.login(account.value, password.value)
  if (result) startCountdown()
}

// 倒數5秒轉到首頁
let timer = null
let isCounting = false
const startCountdown = () => {
  if (isCounting) return
  isCounting = true
  timer = setInterval(() => {
    clearInterval(timer)
    isCounting = false
    // 🔁 導回首頁
    const path = route.query?.redirect ? route.query.redirect : '/'
    router.replace(path)
  }, 5000)
}
</script>

<template>
  <div v-if="userStore.isLogin">
    <h6>登入成功</h6>
    <RouterLink to="/">回到首頁</RouterLink>
    <br />
    <button @click="userStore.logout">登出</button>
  </div>
  <div v-else>
    <h6>登入</h6>
    <input type="text" v-model="account" />
    <br />
    <input type="password" v-model="password" />
    <br />
    <button @click="login">登入</button>
    {{ userStore.errorMsg }}
  </div>
</template>
