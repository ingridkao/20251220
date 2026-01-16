<script setup>
// 圖片引用方法1 For assets
import turtleImg1 from '@/assets/img/3.png'
// .. 表示回到views目錄
const parseAssetsIcon = (fileName) => {
  return new URL(`/src/assets/img/${fileName}`, import.meta.url).href
}
const baseURL = import.meta.env.BASE_URL
</script>
<template>
  <h1>QA</h1>
  <img :src="`${baseURL}img/1.png`" />
  <img :src="turtleImg1" />
  <img :src="parseAssetsIcon('3.png')" />
</template>
<style lang="scss" scoped>
img {
  max-height: 5rem;
}
</style>
