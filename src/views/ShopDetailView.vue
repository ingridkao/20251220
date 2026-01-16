<script setup>
import { computed } from 'vue'
const prop = defineProps(['id'])
const products = [
  { id: 1, name: '咖啡', price: 120 },
  { id: 2, name: '吐司', price: 60 },
  { id: 3, name: '紅茶', price: 45 },
]
const targetProd = computed(() => {
  return products.find((item) => {
    return item.id == prop.id
  })
})
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
