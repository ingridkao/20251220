<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

import { ref } from 'vue'
const account = ref('')
const password = ref('')
const login = () => {
  userStore.login(account.value, password.value)
}
</script>

<template>
  <div>
    <input type="text" v-model="account" />
    <br />
    <input type="password" v-model="password" />
    <br />
    {{ userStore.isLogin ? 1 : 0 }}
    <button @click="login">登入</button>
    {{ userStore.errorMsg }}
  </div>
</template>
