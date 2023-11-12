<script setup lang="ts">
import router from '@/router'
import BoxContainerComponent from '@/pages/SignUp/components/BoxContainerComponent.vue'
import VButton from '@/components/VButton.vue'

defineEmits<{
  (e: 'stageMovement', stage: number): void
}>()
</script>

<template>
  <BoxContainerComponent title="Crea una cuenta">
    <form class="w-full">
      <p class="text-xs mt-8 text-center">
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

      <div class="inline-flex items-center">
        <input type="checkbox" id="terms" class="rounded-full mr-4" />
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
  </BoxContainerComponent>
</template>
