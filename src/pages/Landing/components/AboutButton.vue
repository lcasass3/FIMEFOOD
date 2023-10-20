<script setup lang="ts">
import { ArrowLongRightIcon } from '@heroicons/vue/20/solid'
import router from '@/router'
</script>

<template>
  <button
    type="button"
    class="btn btn-secondary"
    style="height: 35px"
    @click="router.push({ path: '/about-us' })"
  >
    <p class="d-inline-flex me-5">Conoce más</p>
    <ArrowLongRightIcon style="height: 10px; width: 20px; weight: 10px" />
  </button>
</template>
