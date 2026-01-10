<script setup>
// 1. 載入套件
import { ref, onMounted } from 'vue'
import axios from 'axios'

// 2. 定義資料
const userList = ref([])

// 3. 取得即時資料(在渲染畫面後去取資料)
onMounted(() => {
  axios.get('https://fakestoreapi.com/users').then((res) => {
    // userList.value = res.data // 把資料丟給userList
    const result = res.data
    // debugger
    userList.value = result
  })
})
// https://ingridkao.notion.site/20-ES6-2313a6e232de80aab2c9f4a0e9d80b49?source=copy_link
const nameKey = 'name'
const person = {
  name: 'ingrid',
  age: 38,
  year: 1987,
  isStudent: false,
  hello: function (val1, val2) {
    console.log(this)
    return `Hi, My name is ${this.name}___${val1}__${val2}`
  },
  birthYear: () => {
    // 2025 - 1987 = 38
    const current = new Date().getFullYear()
    return current - person.year
  },
  // talk() {},
}
const keyWord = ref('')
const getInput = (e) => {
  // debugger
  keyWord.value = e.target.value
}
const resultList = ref([])
const search = () => {
  // const answer = userList.value.filter((u) => {
  //   return u.username === keyWord.value
  // })
  // resultList.value = answer
  resultList.value = userList.value.filter((u) => {
    // return u.username === keyWord.value      // 精準比對
    // return keyWord.value.includes(u.username)// 錯誤邏輯
    return u.username.includes(keyWord.value) // 模糊比對
  })
}
</script>

<template>
  <!-- 要記得key -->
  <input type="text" placeholder="請輸入名稱" @input="getInput" />
  <button @click="search">Ok</button>
  {{ keyWord }}
  <!-- {{ resultList }} -->
  <!-- {{ userList }} -->
  <ol>
    <li v-for="user in resultList" :key="user.id">
      {{ user.username }}
    </li>
  </ol>
</template>

<style lang="scss" scoped></style>
