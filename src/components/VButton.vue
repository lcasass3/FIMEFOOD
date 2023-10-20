<script setup lang="ts">
defineProps<{
  type: 'primary' | 'secondary' | 'danger' | 'outline'
}>()
</script>

<template>
  <button
    class="btn"
    type="button"
    :class="{
      'btn-primary': type === 'primary',
      'btn-secondary': type === 'secondary',
      'btn-danger': type === 'danger',
      'btn-outline-primary': type === 'outline'
    }"
    :style="{}"
  >
    <slot></slot>
  </button>
</template>
