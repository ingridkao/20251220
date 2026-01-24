<script setup>
import { ref, onMounted } from 'vue'

const weatherData = ref(null)
const loading = ref(false)
const errorMsg = ref('')

const getLocation = () => {
  if (!navigator.geolocation) {
    errorMsg.value = '此裝置不支援定位'
    return
  }

  loading.value = true
  errorMsg.value = ''

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords
      await fetchWeather(latitude, longitude)
    },
    (error) => {
      errorMsg.value = '定位失敗，請確認權限'
      loading.value = false
    },
  )
}

const fetchWeather = async (lat, lon) => {
  const url = new URL('https://api.open-meteo.com/v1/forecast')
  url.search = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current: 'temperature_2m',
    // hourly: 'temperature_2m',
    // forecast_days: 1,
    timezone: 'Asia/Taipei',
  }).toString()
  try {
    const res = await fetch(url)
    const data = await res.json()
    weatherData.value = data
  } catch (err) {
    errorMsg.value = '天氣資料取得失敗'
  } finally {
    loading.value = false
  }
}

// 南投 23.7659, 121.0497
onMounted(async () => {
  await fetchWeather(23.7659, 121.0497)
})
</script>

<template>
  <div>
    <h2>🌦️ 天氣查詢</h2>
    <button @click="getLocation">取得我的位置</button>

    <div v-if="loading">取得資料中...</div>
    <div v-if="errorMsg">{{ errorMsg }}</div>

    <div v-if="weatherData">
      <p>
        🌡️ 溫度：{{ weatherData.current.temperature_2m
        }}{{ weatherData.current_units.temperature_2m }}
      </p>
    </div>
  </div>
</template>
