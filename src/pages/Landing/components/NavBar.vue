<script setup lang="ts">
import VButton from '@/components/VButton.vue'
import router from '@/router'
</script>

<template>
  <nav class="h-full w-full bg-white shadow flex items-center px-12 py-3 justify-between">
    <button class="font-bold text-2xl text-font" @click="router.push({ path: '/' })">
      FIMEFOOD
    </button>
    <div class="flex">
      <VButton type="outline" class="mr-4" @click="router.push({ path: '/login' })"
        >Iniciar Sesion</VButton
      >
      <VButton type="primary" @click="router.push({ path: '/sign-up' })">Crear cuenta</VButton>
    </div>
  </nav>
</template>
