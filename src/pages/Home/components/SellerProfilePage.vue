<script setup lang="ts">
import { ref } from 'vue'
import VPublicationListItem from '@/components/VPublicationListItem.vue'
import VPublicationModal from '@/components/VPublicationModal.vue'

const isOpen = ref(false)
function openModal() {
  isOpen.value = true
}
function closeModal() {
  isOpen.value = false
}
</script>

<template>
  <header class="h-1/4 w-full">
    <img src="@/assets/images/gatoFime.jpg" alt="Gato" class="h-full w-full object-cover" />
  </header>
  <div class="h-3/4 py-8 px-16 overflow-auto">
    <h1 class="text-3xl font-medium">Fimeño Vendedor</h1>
    <p class="text-sm mt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ratione ipsam id
      mollitia ullam, nam dolores laudantium doloribus, ab fuga nemo dignissimos fugiat excepturi
      dolore, architecto perferendis ex reiciendis omnis! Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Quasi consequuntur quaerat nisi esse dicta magnam fuga reiciendis adipisci
      ea provident soluta ut, laudantium at praesentium maxime veniam mollitia cumque? Esse.
    </p>

    <div class="w-full flex flex-wrap mt-8">
      <VPublicationListItem class="mb-8 mx-4" @click="openModal" />
      <VPublicationModal :is-main-modal-open="isOpen" @close-modal="closeModal" />
    </div>
  </div>
</template>
