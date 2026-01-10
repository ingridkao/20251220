<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
const productList = ref([])
// 快速計算陣列數量結果
const listCount = computed(() => {
  return productList.value.length
})
const noData = computed(() => productList.value.length === 0)
const fetchData = () => {
  axios
    // .get('https://fakestoreapi.com/products')
    .get('/data/product.json')
    .then((response) => {
      // handle success -> 把請求後得到的資料丟給productList
      productList.value = response.data
      // resultList.value = response.data
    })
    .catch((error) => {
      // handle error
      console.log(error)
    })
    .finally(() => {
      // always executed
    })
}
onMounted(() => {
  fetchData()
})
const searchStr = ref('')
const colors = ref('#rrggbb')
const fontSizeValue = ref(10)
// const resultList = ref([])
// const search = () => {
//   resultList.value = productList.value.filter((item) => {
//     return item.title.includes(searchStr.value)
//   })
// }
const resultList = computed(() => {
  return productList.value.filter((item) => {
    return item.title.includes(searchStr.value)
  })
})
</script>

<template>
  <h1>商品</h1>
  <input type="text" v-model="searchStr" />
  <button @click="search">搜尋</button>
  <p>商品總數：{{ listCount }}</p>
  <!-- <span v-for="num in Math.round(4.1)">🌟</span>
  <span v-for="(str, index) in stringList"> {{ index + 1 }}. {{ str }} </span> -->
  <div v-if="noData">沒有資料</div>
  <div v-else>
    <article v-for="product in resultList">
      <div :style="{ backgroundColor: colors }">
        <img :src="product.image" />
      </div>
      <div>
        <h2>{{ product.title }}</h2>
        <p>分類：{{ product.category }}</p>
        <span v-for="num in Math.round(product.rating?.rate || 0)">🌟</span>
        <span>({{ product.rating?.count || 0 }})</span>
      </div>
    </article>
  </div>
</template>

<style lang="scss">
article {
  border: 1px solid #555;
}

img {
  max-height: 5rem;
}

h1 {
  color: blue;
}
</style>
