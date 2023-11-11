<script setup lang="ts">
import { ArrowLongRightIcon } from '@heroicons/vue/20/solid'
import router from '@/router'
</script>

<template>
  <button
    type="button"
    class="flex bg-softGreen px-4 py-1 rounded-xl shadow w-60 justify-between text-sm items-center"
    @click="router.push({ path: '/about-us' })"
  >
    Conoce más
    <ArrowLongRightIcon class="w-6" />
  </button>
</template>
