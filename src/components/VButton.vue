<script setup lang="ts">
defineProps<{
  type: 'primary' | 'outline'
}>()
</script>

<template>
  <button
    type="button"
    :class="{
      'bg-secondary px-3 py-2 rounded-lg text-sm shadow': type === 'primary',
      'bg-inherit text-sm px-3 py-2 rounded-xl hover:border hover:border-secondary':
        type === 'outline'
    }"
  >
    <slot></slot>
  </button>
</template>
