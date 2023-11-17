<script setup lang="ts">
import router from '@/router'
import path from 'path'
</script>

<template>
  <div
    class="bg-white border border-black w-[90%] h-1/6 lg:h-1/5 rounded-lg mb-5 cursor-pointer p-2 relative flex flex-wrap items-center"
    @click="router.push({ path: '/' })"
  >
    <img src="@/assets/images/gatoFime.jpg" alt="Gato" class="w-1/6 h-full object-cover relative" />
    <div class="ml-4">
      <p class="text-md">Vendedor de FIME</p>
      <span class="text-xs">Tiene publicaciones ahora</span>
    </div>
  </div>
</template>
