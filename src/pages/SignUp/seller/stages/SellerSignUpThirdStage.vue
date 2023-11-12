<script setup lang="ts">
import router from '@/router'
import VBoxContainerComponent from '@/components/VBoxContainerComponent.vue'
import VButton from '@/components/VButton.vue'
import VGoBackComponent from '@/components/VGoBackComponent.vue'

defineEmits<{
  (e: 'stageMovement', stage: number): void
}>()
</script>

<template>
  <VGoBackComponent @click="$emit('stageMovement', 1)" />

  <VBoxContainerComponent title="Crea una cuenta">
    <form class="w-full">
      <p class="text-xs mt-8">
        Por último, para garantizar la seguridad en las ventas dentro de nuestro sistema necesitamos
        algunos documentos personales en formato PDF:
      </p>
      <div>
        <label class="block mt-8 text-xs font-medium text-gray-900" for="identification"
          >Identificación oficial o universitaria</label
        >
        <input
          class="block w-full mb-4 text-xs text-gray-900 border border-gray-300 rounded-e-lg cursor-pointer bg-gray-50"
          id="identification"
          type="file"
          accept=".pdf"
        />
      </div>
      <div>
        <label class="block text-xs font-medium text-gray-900" for="studiesCertificate"
          >Comprobante de estudios de FIME</label
        >
        <input
          class="block w-full mb-4 text-xs text-gray-900 border border-gray-300 rounded-e-lg cursor-pointer bg-gray-50"
          id="studiesCertificate"
          type="file"
          accept=".pdf"
        />
      </div>
      <div>
        <label class="block text-xs font-medium text-gray-900" for="proofOfResidency"
          >Comprobante de domicilio</label
        >
        <input
          class="block w-full mb-4 text-xs text-gray-900 border border-gray-300 rounded-e-lg cursor-pointer bg-gray-50"
          id="proofOfResidency"
          type="file"
          accept=".pdf"
        />
      </div>

      <div class="flex items-center">
        <input
          type="checkbox"
          required
          id="terms"
          class="shrink-0 mr-4 border-gray-200 rounded-full text-primary focus:ring-0"
        />
        <label for="terms" class="text-xs"
          ><small
            >Acepto los términos y condiciones para ser vendedor en la página de FIMEFOOD</small
          ></label
        >
      </div>
    </form>

    <template #button>
      <VButton type="primary" class="w-full mt-6" @click="router.push({ path: '/' })"
        >Siguiente</VButton
      >
    </template>
  </VBoxContainerComponent>
</template>
