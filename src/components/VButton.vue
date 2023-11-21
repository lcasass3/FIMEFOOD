<script setup lang="ts">
defineProps<{
  type: 'primary' | 'outline' | 'redBtn'
}>()
</script>

<template>
  <button
    type="button"
    :class="{
      'bg-secondary px-3 py-2 rounded-lg text-sm shadow': type === 'primary',
      'bg-inherit text-sm px-3 py-2 rounded-xl hover:border hover:border-secondary':
        type === 'outline',
      'bg-red-400 hover:bg-red-500 px-3 py-2 rounded-2xl text-sm shadow': type === 'redBtn'
    }"
  >
    <slot></slot>
  </button>
</template>
