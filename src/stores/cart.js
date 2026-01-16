import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([1, 2, 3])
  const cartCount = computed(() => items.value.length)
  const add = () => {
    items.value.push(cartCount.value + 1)
  }
  const clear = () => {
    items.value = []
  }
  return { items, cartCount, add, clear }
})
