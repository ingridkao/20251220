<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
const productList = ref([])
// 快速計算陣列數量結果
const listCount = computed(() => {
  return productList.value.length
})
const noData = computed(() => productList.value.length === 0)

onMounted(() => {
  axios
    .get('https://fakestoreapi.com/products')
    .then((response) => {
      // handle success -> 把請求後得到的資料丟給productList
      productList.value = response.data
    })
    .catch((error) => {
      // handle error
      console.log(error)
    })
    .finally(() => {
      // always executed
    })
})
</script>

<template>
  <h1>商品</h1>
  <p>商品總數：{{ listCount }}</p>
  <!-- <span v-for="num in Math.round(4.1)">🌟</span>
  <span v-for="(str, index) in stringList"> {{ index + 1 }}. {{ str }} </span> -->
  <div v-if="noData">沒有資料</div>
  <div v-else>
    <article v-for="product in productList">
      <div>
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
