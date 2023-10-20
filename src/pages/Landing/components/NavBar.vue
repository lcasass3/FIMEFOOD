<script setup lang="ts">
import VButton from '@/components/VButton.vue'
import router from '@/router'
</script>

<template>
  <nav class="navbar bg-body-tertiary shadow-sm px-5 vw-100">
    <div class="container-fluid">
      <a class="navbar-brand fw-bolder text-hardGreen fs-3" @click="router.push({ path: '/' })"
        >FIMEFOOD</a
      >
      <form class="d-flex">
        <VButton type="outline" @click="router.push({ path: '/login' })">Iniciar Sesión</VButton>
        <VButton type="primary" class="ms-3" @click="router.push({ path: '/sign-up' })"
          >Crear cuenta</VButton
        >
      </form>
    </div>
  </nav>
</template>
