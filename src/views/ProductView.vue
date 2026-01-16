<script setup>
// 1)引用所有會用到的套件等
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import Card from '@/components/ui/Card.vue'
import BasicButton from '@/components/ui/BasicButton.vue'

const productList = ref([])
// 快速計算陣列數量結果
const listCount = computed(() => {
  return productList.value.length
})
const noData = computed(() => productList.value.length === 0)
const baseURL = import.meta.env.BASE_URL
const fetchData = () => {
  axios
    // .get('https://fakestoreapi.com/products')
    .get(`${baseURL}data/product.json`)
    .then((response) => {
      // handle success -> 把請求後得到的資料丟給productList
      productList.value = response.data
      resultList.value = response.data
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
const resultList = ref([])
const search = () => {
  resultList.value = productList.value.filter((item) => {
    return item.title.includes(searchStr.value)
  })
}

const btnSize = ref('ingrid')
const clickBtn1 = (value1, value2) => {
  btnSize.value = value1
}
const clickBtn2 = (value1, value2) => {
  btnSize.value = value1
}
</script>

<template>
  <h1>商品</h1>
  <BasicButton :size="btnSize" title="small" @clickHandler="clickBtn1" />
  <BasicButton :size="btnSize" title="large" @clickHandler="clickBtn2" />

  <!-- 圖片引用方法2 Only assets -->
  <Swiper :slides-per-view="2" :space-between="10">
    <SwiperSlide v-for="product in resultList" :key="product.id">
      <Card>
        <template #title>
          {{ product.title }}
        </template>
        <template #desc>
          {{ product.category }}
          <!-- <BasicButton size="small" title="ingrid" /> -->
        </template>
        <template #footer>
          <!-- <BasicButton size="small" title="ingrid" @clickHandler="clickBtn" /> -->
        </template>
      </Card>

      <!-- <img src="/public/img/1.png" /> -->
    </SwiperSlide>
  </Swiper>

  <br />
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
<style scoped lang="scss" src="@/assets/styles/page/product.scss"></style>
<style lang="scss" scoped>
// @import '@/assets/styles/page/product.scss';
h1 {
  color: green;
}
article {
  border: 1px solid $color-primary;
}

img {
  max-height: 5rem;
}
</style>
