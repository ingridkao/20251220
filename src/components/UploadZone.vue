<script setup>
import { ref } from 'vue'
import axios from 'axios'

const file = ref(null)
const previewUrl = ref('')

const onFileChange = (e) => {
  const selected = e.target.files[0]
  if (!selected) return

  file.value = selected
  previewUrl.value = URL.createObjectURL(selected)
}

const uploadFile = async () => {
  if (!file.value) return

  const formData = new FormData()
  formData.append('file', file.value)

  try {
    const res = await axios.post('https://httpbin.org/post', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    alert('✅ 上傳成功！（模擬）')
    console.log(res.data)
  } catch (err) {
    alert('❌ 上傳失敗')
    console.error(err)
  }
}

const fileRef = ref(null)
const isOver = ref(false)
// const previewUrls = ref([])
const MAX_SIZE_MB = 5
const triggerInput = () => {
  fileRef.value?.click()
}

const onDragOver = () => {
  isOver.value = true
}
const onDragLeave = () => {
  isOver.value = false
}

const onDrop = (e) => {
  isOver.value = false
  handleFiles(e.dataTransfer.files)
}

const handleFiles = (fileList) => {
  const validFiles = Array.from(fileList).filter((file) => {
    return file.type.startsWith('image/') && file.size <= MAX_SIZE_MB * 1024 * 1024
  })
  // debugger
  const selected = validFiles[0]
  if (!selected) return
  file.value = selected
  previewUrl.value = URL.createObjectURL(selected)

  // previewUrls.value = validFiles.map((file) => URL.createObjectURL(file))
}
</script>

<template>
  <div
    class="drop-zone"
    :class="{ 'is-over': isOver }"
    @dragover.prevent="onDragOver"
    @dragleave="onDragLeave"
    @drop.prevent="onDrop"
  >
    <h2>📁 上傳圖片</h2>
    <input type="file" ref="fileRef" @change="onFileChange" accept="image/*" />

    <div v-if="previewUrl" style="margin-top: 1rem">
      <p>📷 預覽：</p>
      <img :src="previewUrl" alt="預覽圖" style="max-width: 300px" />
    </div>

    <button @click="uploadFile" :disabled="!file">上傳</button>
  </div>
</template>

<style scoped>
.drop-zone {
  border: 2px dashed #bbb;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
  background: #fafafa;
  transition:
    border-color 0.2s,
    background-color 0.2s;
  cursor: pointer;
}
.drop-zone.is-over {
  border-color: #4a90e2;
  background-color: #eef6ff;
}
.drop-zone button {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.preview-area {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 12px;
}
</style>
