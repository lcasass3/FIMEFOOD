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
  >
    <slot></slot>
  </button>
</template>
