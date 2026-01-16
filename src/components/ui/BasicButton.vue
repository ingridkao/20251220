<script setup>
// defineProps(['title', 'size', 'type'])
const prop = defineProps({
  title: {
    type: String,
    default: '按鈕',
  },
  size: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'basic',
  },
})
const emit = defineEmits(['clickHandler', 'update'])
const clickAction = () => {
  emit('clickHandler', prop.title)
  // emit('update')
}
</script>

<template>
  <button :class="[size, type]" @click="clickAction">
    {{ title }}
  </button>
</template>

<style lang="scss" scope>
button {
  &.large {
    width: 5rem;
  }
  &.small {
    width: 10rem;
  }
  &.round {
  }
  &.circle {
  }
}
</style>
