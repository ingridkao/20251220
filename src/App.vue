<script setup>
import { ref, reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
const count = ref(0)
const addCount = () => {
  count.value++
}
const list = ref(['#a23131', '#888', '#123122'])
// 如果要變更數值渲染在畫面上一定要用ref
const url1 = ref('https://www.google.com')
let url2 = 'https://www.google.com'
const updateUrl = () => {
  url1.value = 'https://font.google.com'
  url2 = 'https://font.google.com' // 不可以用const定義
}
const user = reactive({
  name: 'ingrid',
  blog: 'tsetstse',
})
const rename = () => {
  user.name = 'kao'
}
const updateUser = () => {
  // user = {
  //   name: 'asds',
  //   blog: 'tsetsdqwewatse',
  // }
  user.name = 'asds'
  user.blog = 'tsetsdqwewatse'
}
</script>
<template>
  <!-- {{ user.blog }}
  {{ user['name'] }}
  <button @click="rename">重新命名</button>
  <button @click="updateUser">換人</button>
  <p :style="{ color: list[count] || 'blue' }">{{ count }}</p>
  <button @click="addCount">數字加一</button>
  <button @click="updateUrl">click</button>
  <a :href="url1">{{ url1 }} </a>
  <a :href="url2">{{ url2 }} - 不會被更新(不是響應式資料)</a> -->
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="wrapper">
      <!-- <HelloWorld msg="聖誕節嘿嘿" /> -->
      <nav>
        <RouterLink to="/">首頁</RouterLink>
        <RouterLink to="/about">關於</RouterLink>
        <RouterLink to="/product">商品</RouterLink>
        <RouterLink to="/cart">購物車</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  border: 1px solid #000;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
