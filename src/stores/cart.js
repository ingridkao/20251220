import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const cartCount = computed(() => items.value.length)
  // val：父層傳進來的商品資料
  // prod: 購物車裡面的每一個商品
  const add = (val) => {
    const target = items.value.find((prod) => prod.id === val.id)
    if (!target) {
      items.value.push({
        ...val,
        count: 1,
      })
    } else {
      target.count++
    }
  }
  const clear = () => {
    items.value = []
  }
  return { items, cartCount, add, clear }
})
