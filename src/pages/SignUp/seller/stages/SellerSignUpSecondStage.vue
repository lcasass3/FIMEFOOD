<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'
import VBoxContainerComponent from '@/components/VBoxContainerComponent.vue'
import VButton from '@/components/VButton.vue'
import VGoBackComponent from '@/components/VGoBackComponent.vue'

defineEmits<{
  (e: 'stageMovement', stage: number): void
}>()
</script>

<template>
  <VGoBackComponent @click="$emit('stageMovement', 0)" />

  <VBoxContainerComponent title="Crea una cuenta">
    <form class="w-full">
      <input
        type="text"
        minlength="5"
        maxlength="45"
        placeholder="Apodo de vendedor"
        class="bg-neutral-100 border border-gray-600 rounded-md p-2 text-xs w-full my-1"
      />
      <input
        type="text"
        placeholder="Tipos de productos a vender"
        class="bg-neutral-100 border border-gray-600 rounded-md p-2 text-xs w-full my-1"
      />
      <input
        type="tel"
        minlength="10"
        maxlength="10"
        placeholder="Método de contacto (celular)"
        class="bg-neutral-100 border border-gray-600 rounded-md p-2 text-xs w-full my-1"
      />

      <p class="text-xs mt-8 text-center">
        Si cuentas con algunas imágenes de referencia sobre tus productos o punto de venta,
        agrégalas:
      </p>

      <input
        class="block mt-4 w-full mb-4 text-xs text-gray-900 border border-gray-300 rounded-e-lg cursor-pointer bg-gray-50"
        id="studiesCertificate"
        type="file"
        accept=".pdf"
      />
    </form>

    <template #button>
      <VButton type="primary" class="w-full mt-6" @click="$emit('stageMovement', 2)"
        >Siguiente</VButton
      >
    </template>
  </VBoxContainerComponent>
</template>
