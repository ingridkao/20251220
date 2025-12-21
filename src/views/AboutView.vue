<script setup>
import { ref } from 'vue'
// const light = ref(false)
// const updateLight = () => {
//   light.value = !light.value
// }
const target = ref('')
</script>

<template>
  <hr />
  {{ target }}
  <button @click="target = 'A'">A</button>
  <button @click="target = 'B'">B</button>
  <button @click="target = 'C'">C</button>
  <transition name="fade"><div v-show="target === 'A'" class="card">A</div></transition>
  <transition name="fade"><div v-show="target === 'B'" class="card">B</div></transition>
  <transition name="fade"><div v-show="target === 'C'" class="card">C</div></transition>
  <!-- <div v-else class="card">D</div> -->
  <!-- <button @click="updateLight">開關燈</button>
  <div
    class="card"
    :class="light ? 'lightBg' : 'darkBg'"
    :style="{
      'background-color': light ? 'yellow' : '#000',
    }"
  >
    {{ light ? '開' : '關' }}
  </div> -->
</template>

<style scoped>
.card {
  width: 5rem;
  height: 5rem;
}
/* p {
  color: red;
} */
</style>
