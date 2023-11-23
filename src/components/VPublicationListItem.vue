<script setup lang="ts">
import { ref } from 'vue'
import VPublicationModal from '@/components/VPublicationModal.vue'

const props = defineProps<{
  title: string
  description: string
  contact: string
}>()

const isOpen = ref(false)
function openModal() {
  isOpen.value = true
}
function closeModal() {
  isOpen.value = false
}
</script>

<template>
  <div
    @click="openModal"
    class="bg-white shadow-md border border-black p-3 w-[40%] md:w-1/5 h-1/4 lg:h-[45%] rounded-lg flex flex-col justify-center items-center cursor-pointer truncate mb-8 mx-4"
  >
    <img src="@/assets/images/gatoFime.jpg" alt="Gato" class="h-3/4 w-3/4 object-cover" />

    <div class="text-xs flex flex-col items-center justify-center text-center mt-4 w-full">
      <p class="w-full truncate">{{ props.title }}</p>
      <span
        ><small>{{ props.contact }}</small></span
      >
    </div>
  </div>

  <VPublicationModal
    @close-modal="closeModal"
    :is-main-modal-open="isOpen"
    :title="props.title"
    :description="props.description"
    :contact="props.contact"
  />
</template>
