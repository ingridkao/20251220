<script setup>
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
// 範例商品資料（之後可換成 API 取回來）
const products = [
  { id: 1, name: '咖啡', price: 120 },
  { id: 2, name: '吐司', price: 60 },
  { id: 3, name: '紅茶', price: 45 },
]
</script>
<template>
  <main>
    <div>
      <div v-for="prod in products" :key="prod.id">
        {{ prod.id }}. {{ prod.name }} $ {{ prod.price }}
        <button @click="cartStore.add(prod)">加入購物車</button>
      </div>
    </div>
    <aside>
      <p v-for="cart in cartStore.items" :key="cart">{{ cart }}</p>
      <button @click="cartStore.clear()">清空</button>
    </aside>
  </main>
</template>

<!-- <style lang="scss" scoped>
main {
  display: inlne-flex;
}
</style> -->
