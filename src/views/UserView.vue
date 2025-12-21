<script setup>
// 1. 載入套件
import { ref, onMounted } from 'vue'
import axios from 'axios'

// 2. 定義資料
const userList = ref([])

// 3. 取得即時資料(在渲染畫面後去取資料)
onMounted(() => {
  axios.get('https://fakestoreapi.com/users').then((res) => {
    console.log(res.data)
    // console.log(userList.value) // 取userList
    userList.value = res.data // 把資料丟給userList
  })
})
</script>

<template>
  <ol>
    <li v-for="user in userList">
      {{ user.username }}
    </li>
  </ol>
</template>

<style lang="scss" scoped></style>
