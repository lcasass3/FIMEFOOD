<script setup lang="ts">
import VPublicationListItem from '@/components/VPublicationListItem.vue'
import VPublicationModal from '@/components/VPublicationModal.vue'
import { ref } from 'vue'

const isOpen = ref(false)
function openModal() {
  isOpen.value = true
}
function closeModal() {
  isOpen.value = false
}
</script>

<template>
  <main class="px-12 py-12 h-full w-full">
    <h1 class="text-3xl font-medium mb-4">Cerca de ti</h1>
    <div class="h-[90%] w-full flex flex-wrap overflow-auto">
      <VPublicationListItem class="mb-8 mx-4" @click="openModal" />
      <VPublicationModal :is-open="isOpen" @close-modal="closeModal" />
    </div>
  </main>
</template>
