<script setup lang="ts">
import VButton from '@/components/VButton.vue'
</script>

<template>
  <nav class="navbar bg-body-tertiary shadow-sm px-5">
    <div class="container-fluid">
      <a class="navbar-brand">FIMEFOOD</a>
      <form class="d-flex">
        <VButton type="outline">Iniciar Sesión</VButton>
        <VButton type="primary" class="ms-3">Crear cuenta</VButton>
      </form>
    </div>
  </nav>
</template>
