<script setup lang="ts">
import VBoxContainerComponent from '@/components/VBoxContainerComponent.vue'
import VButton from '@/components/VButton.vue'
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'

defineEmits<{
  (e: 'pageMovement', activePage: boolean): void
}>()
</script>

<template>
  <button class="absolute top-5 left-5" @click="$emit('pageMovement', false)">
    <ArrowLeftIcon class="w-8" />
  </button>

  <VBoxContainerComponent title="Crea una cuenta" button-text="Crear cuenta">
    <form class="w-full">
      <input
        type="text"
        minlength="5"
        maxlength="45"
        placeholder="Nombre"
        class="bg-neutral-100 border border-gray-600 rounded-md p-2 text-xs w-full my-1"
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        class="bg-neutral-100 border border-gray-600 rounded-md p-2 text-xs w-full my-1"
      />
      <input
        type="email"
        placeholder="Confirma tu correo electrónico"
        class="bg-neutral-100 border border-gray-600 rounded-md p-2 text-xs w-full my-1"
      />
      <input
        type="password"
        placeholder="Contraseña"
        class="bg-neutral-100 border border-gray-600 rounded-md p-2 text-xs w-full my-1"
      />
      <input
        type="password"
        placeholder="Confirma tu contraseña"
        class="bg-neutral-100 border border-gray-600 rounded-md p-2 text-xs w-full my-1"
      />
    </form>

    <template #button>
      <VButton type="primary" class="w-full mt-6">Crear cuenta</VButton>
    </template>
  </VBoxContainerComponent>
</template>
