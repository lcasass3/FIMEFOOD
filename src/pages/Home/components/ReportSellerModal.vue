<script setup lang="ts">
import VButton from '@/components/VButton.vue'
const props = defineProps<{
  isReportReasonModalOpen: boolean
}>()

defineEmits<{
  (e: 'closeModal'): void
}>()
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center transition-opacity"
    :class="{
      'opacity-100 ease-in duration-300 pointer-events-auto': props.isReportReasonModalOpen,
      'opacity-0 ease-out duration-200 pointer-events-none': !props.isReportReasonModalOpen
    }"
  >
    <div @click="$emit('closeModal')" name="modal" class="fixed inset-0 bg-black opacity-50"></div>
    <div
      class="modal-content relative bg-white rounded-[30px] shadow-lg w-1/3 max-w-4xl h-[85%] overflow-auto p-12"
    >
      <header class="relative mb-8">
        <h1 class="text-2xl font-medium">Cuentanos el motivo de tu reporte</h1>
      </header>

      <form class="relative overflow-auto">
        <div class="flex items-center mb-6">
          <input type="radio" id="firstReason" name="reason" class="text-primary focus:ring-0" />
          <label for="firstReason" class="text-xs ml-3">
            El vendedor anuncia productos no apropiados
          </label>
        </div>

        <div class="flex items-center my-6">
          <input type="radio" id="secondReason" name="reason" class="text-primary focus:ring-0" />
          <label for="secondReason" class="text-xs ml-3">
            La calidad de los productos no es igual a lo que se muestra
          </label>
        </div>

        <div class="flex items-center my-6">
          <input type="radio" id="thirdReason" name="reason" class="text-primary focus:ring-0" />
          <label for="thirdReason" class="text-xs ml-3">
            El vendedor tiene un mal trato con el cliente
          </label>
        </div>

        <div class="flex flex-wrap items-center my-6">
          <div>
            <input type="radio" id="fourthReason" name="reason" class="text-primary focus:ring-0" />
            <label for="fourthReason" class="text-xs ml-3 mb-3">Otro</label>
          </div>
          <textarea
            name="otherReason"
            id="otherReason"
            cols="35"
            rows="3"
            class="focus:ring-primary focus:border-primary block w-full mt-2"
          ></textarea>
        </div>

        <VButton type="primary" class="w-1/4" @click="$emit('closeModal')">Enviar</VButton>
      </form>
    </div>
  </div>
</template>
