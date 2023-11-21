<script setup lang="ts">
import PublicationsCarrousel from './components/PublicationsCarrousel.vue'
</script>

<template>
  <main class="px-12 py-12 h-full w-full flex items-center">
    <div class="h-fit w-full">
      <h1 class="text-3xl font-medium mb-4">Publicaciones activas</h1>
      <PublicationsCarrousel />
      <h1 class="text-3xl font-medium mb-4">Publicaciones cerradas</h1>
      <PublicationsCarrousel />
    </div>
  </main>
</template>
