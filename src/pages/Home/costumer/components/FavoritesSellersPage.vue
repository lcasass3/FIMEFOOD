<script setup lang="ts">
import FavoritesListItem from './FavoritesListItem.vue'
</script>

<template>
  <main class="px-12 py-12 h-full w-full">
    <h1 class="text-3xl font-medium mb-4">Lista de favoritos</h1>
    <div class="h-[90%] w-full flex flex-wrap overflow-auto">
      <FavoritesListItem />
    </div>
  </main>
</template>
