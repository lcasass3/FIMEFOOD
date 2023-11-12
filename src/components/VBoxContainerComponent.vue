<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <dialog open class="bg-white w-1/3 rounded-3xl p-12 max-w-md max-h-fit shadow-md">
    <h1 class="text-2xl font-medium mb-8">{{ props.title }}</h1>
    <form class="w-full">
      <slot></slot>
    </form>
    <slot name="button"></slot>
  </dialog>
</template>
