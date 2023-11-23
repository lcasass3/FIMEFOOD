<script setup lang="ts">
import VButton from '@/components/VButton.vue'
import CreateNewPublication from './CreateNewPublication.vue'
import { ref } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  (e: 'closeModal'): void
}>()

const isCreateNewPubliModalOpen = ref(false)
function openNewPubliModal() {
  isCreateNewPubliModalOpen.value = true
}
function closeNewPubliModal() {
  isCreateNewPubliModalOpen.value = false
}
</script>

<template>
  <div
    v-if="!isCreateNewPubliModalOpen"
    class="fixed inset-0 flex items-center justify-center transition-opacity"
    :class="{
      'opacity-100 ease-in duration-300 pointer-events-auto': props.isOpen,
      'opacity-0 ease-out duration-200 pointer-events-none': !props.isOpen
    }"
  >
    <div @click="$emit('closeModal')" name="modal" class="fixed inset-0 bg-black opacity-50"></div>
    <div
      class="modal-content relative bg-white rounded-[30px] shadow-lg w-1/2 max-w-4xl h-1/2 overflow-auto flex items-center justify-center"
    >
      <div class="h-fit w-3/5 flex flex-wrap justify-center items-center">
        <h1 class="text-2xl font-medium text-center mb-4">¿Qué tipo de producto anunciarás?</h1>
        <select name="productType" class="w-full rounded-lg">
          <option value="candies">Gomitas</option>
          <option value="meals">Comidas</option>
          <option value="coffe">Café</option>
        </select>
        <VButton type="primary" class="w-3/5 mt-6" @click="openNewPubliModal(), $emit('closeModal')"
          >Siguiente</VButton
        >
      </div>
    </div>
  </div>
  <CreateNewPublication
    :is-new-publication-modal-open="isCreateNewPubliModalOpen"
    @close-modal="closeNewPubliModal"
  />
</template>
