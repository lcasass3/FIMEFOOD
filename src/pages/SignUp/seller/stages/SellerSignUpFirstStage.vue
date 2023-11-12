<script setup lang="ts">
import BoxContainerComponent from '@/pages/SignUp/components/BoxContainerComponent.vue'
import VButton from '@/components/VButton.vue'

defineEmits<{
  (e: 'stageMovement', stage: number): void
}>()
</script>

<template>
  <BoxContainerComponent title="Crea una cuenta">
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
      <VButton type="primary" class="w-full mt-6" @click="$emit('stageMovement', 1)"
        >Siguiente</VButton
      >
    </template>
  </BoxContainerComponent>
</template>
