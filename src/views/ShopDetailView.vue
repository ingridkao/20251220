<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
const prop = defineProps(['id'])
const targetProd = ref(null)
const fetchData = () => {
  axios
    .get(`https://fakestoreapi.com/products/${prop.id}`)
    .then((res) => {
      targetProd.value = res.data || {}
    })
    .catch((error) => {})
    .finally(() => {})
}
watch(
  () => prop.id,
  () => {
    fetchData()
  },
  {
    immediate: true,
  },
)
</script>
<template>
  <h1>商品詳情{{ prop.id }}</h1>
  <div v-if="targetProd">{{ targetProd }}</div>
  <div v-else>404</div>
  <hr />
  <RouterLink to="/shop/1">1</RouterLink>
  <RouterLink to="/shop/2">2</RouterLink>
  <RouterLink to="/shop/3">3</RouterLink>
  <RouterLink to="/shop/4">4</RouterLink>
</template>

<style lang="scss" scoped>
a {
  padding: 1rem;
  border: 1px solid #444;
}
</style>
