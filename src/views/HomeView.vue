<script setup>
// import { useCounterStore } from '@/stores/counter'
// const counter = useCounterStore()
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
</script>
<template>
  <main>
    <p v-for="cart in cartStore.items">{{ cart }}</p>
    <button @click="cartStore.add()">加入購物車</button>
    <button @click="cartStore.clear()">清空</button>
    <!-- <p>{{ counter.count }}</p>
    <p>{{ counter.doubleCount }}</p>
    <button @click="counter.increment()">嘿嘿</button> -->
  </main>
</template>
