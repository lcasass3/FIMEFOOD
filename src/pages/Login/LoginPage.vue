<script setup lang="ts">
import router from '@/router'
import VBoxContainerComponent from '@/components/VBoxContainerComponent.vue'
import VButton from '@/components/VButton.vue'
import VGoBackComponent from '@/components/VGoBackComponent.vue'
</script>

<template>
  <main class="flex items-center justify-center h-screen w-screen">
    <VGoBackComponent @click="router.push({ path: '/' })" />

    <VBoxContainerComponent title="Inicia Sesión">
      <div>
        <label for="email" class="text-sm">Correo electrónico</label>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          class="bg-neutral-100 border border-gray-600 rounded-md p-2 text-xs w-full my-1"
        />
      </div>
      <div class="mt-4">
        <label for="password" class="text-sm">Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          class="bg-neutral-100 border border-gray-600 rounded-md p-2 text-xs w-full my-1"
        />
      </div>

      <VButton type="primary" class="w-full mt-4">Iniciar sesión</VButton>
      <p class="text-xs mt-4">
        ¿No tienes una cuenta?
        <span
          class="text-primary underline underline-offset-1 cursor-pointer"
          @click="router.push({ path: '/sign-up' })"
          >Crea una nueva</span
        >
      </p>
    </VBoxContainerComponent>
  </main>
</template>
