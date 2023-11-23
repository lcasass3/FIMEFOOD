<script setup lang="ts">
import VButton from '@/components/VButton.vue'
import FacebookIcon from '@/assets/icons/FacebookIcon.vue'
import { XCircleIcon } from '@heroicons/vue/20/solid'

const props = defineProps<{
  isNewPublicationModalOpen: boolean
}>()

defineEmits<{
  (e: 'closeModal'): void
}>()
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center transition-opacity"
    :class="{
      'opacity-100 ease-in duration-300 pointer-events-auto': props.isNewPublicationModalOpen,
      'opacity-0 ease-out duration-200 pointer-events-none': !props.isNewPublicationModalOpen
    }"
  >
    <div @click="$emit('closeModal')" name="modal" class="fixed inset-0 bg-black opacity-50"></div>
    <div
      class="modal-content relative bg-white rounded-[30px] shadow-lg w-1/2 max-w-4xl h-4/5 overflow-auto"
    >
      <header class="relative h-[30%]">
        <!--Icons over img-->

        <XCircleIcon
          class="text-primary h-8 cursor-pointer absolute z-50 top-2 right-4"
          @click="$emit('closeModal')"
        />

        <div class="relative top-0 rounded-t-[30px] w-full h-3/5 bg-gray-300">
          <!--Img input-->
        </div>

        <!--Title-->
        <div class="h-2/5 px-8 flex items-end">
          <!-- <h1 class="truncate">{{ props.title }}</h1> -->
          <input
            type="text"
            id="title"
            placeholder="Coloca un titulo"
            class="border-0 text-2xl enabled:border-primary placeholder:text-gray-300 placeholder:font-normal font-medium w-full focus:ring-primary focus:border-primary"
          />
        </div>
      </header>

      <div class="relative h-3/5 grid grid-cols-2 px-8 py-4 overflow-auto">
        <div class="grid grid-cols-2 grid-rows-2 gap-2 h-full">
          <!--Body Images-->
          <div class="w-full h-full object-cover bg-gray-300"></div>
          <div class="w-full h-full object-cover bg-gray-300"></div>
          <div class="w-full h-full object-cover bg-gray-300"></div>
          <div class="w-full h-full object-cover bg-gray-300"></div>
        </div>

        <div class="h-full overflow-auto ml-8">
          <!--Body description and contact-->

          <textarea
            class="h-[85%] w-full focus:ring-primary focus:border-primary"
            placeholder="Coloca la descripción de tu publicación"
          ></textarea>
          <div class="h-[10%] flex items-center placeholder:text-2xl">
            <FacebookIcon class="h-full w-fit mr-3" />
            <p class="text-xs">Contacto del vendedor</p>
          </div>
        </div>
      </div>

      <footer class="relative h-[10%] rounded-b-[30px] px-8 flex items-start">
        <!-- Footer -->

        <VButton type="primary" class="relative w-full rounded-full" @click="$emit('closeModal')"
          >¡Listo!</VButton
        >
      </footer>
    </div>
  </div>
</template>
