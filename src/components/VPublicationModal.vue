<script setup lang="ts">
import FacebookIcon from '@/assets/icons/FacebookIcon.vue'
import { XCircleIcon } from '@heroicons/vue/20/solid'

const props = defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  (e: 'closeModal'): void
}>()
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center transition-opacity"
    :class="{
      'opacity-100 ease-in duration-300 pointer-events-auto': props.isOpen,
      'opacity-0 ease-out duration-200 pointer-events-none': !props.isOpen
    }"
  >
    <div @click="$emit('closeModal')" name="modal" class="fixed inset-0 bg-black opacity-50"></div>
    <div class="modal-content relative bg-white rounded-[30px] shadow-lg w-1/2 max-w-xl h-4/5">
      <header class="relative h-[30%]">
        <!--Publication img-->
        <XCircleIcon
          class="text-primary h-8 cursor-pointer absolute z-50 top-2 right-4"
          @click="$emit('closeModal')"
        />
        <img
          src="@/assets/images/gatoFime.jpg"
          alt="Portada"
          class="relative top-0 rounded-t-[30px] w-full h-3/5 object-cover"
        />
        <!--Title-->
        <div class="h-2/5 text-2xl font-medium px-8 flex items-end">
          <h1 class="truncate">Gomitas enchiladas Fime</h1>
        </div>
      </header>

      <div class="relative h-3/5 grid grid-cols-2 px-8 py-4 overflow-auto">
        <!--Body Images-->
        <div class="grid grid-cols-2 grid-rows-2 gap-2 h-full">
          <img src="@/assets/images/gatoFime.jpg" alt="" class="w-full h-full object-cover" />
          <img src="@/assets/images/gatoFime.jpg" alt="" class="w-full h-full object-cover" />
          <img src="@/assets/images/gatoFime.jpg" alt="" class="w-full h-full object-cover" />
          <img src="@/assets/images/gatoFime.jpg" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="h-full overflow-auto ml-8">
          <div class="h-[90%] overflow-auto">
            <p class="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque veniam eum harum
              maiores, est voluptates sequi soluta nisi. Sapiente animi pariatur est culpa sint
              beatae voluptates ut magni unde minus! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Voluptas optio odio voluptatibus saepe iure deserunt culpa,
              voluptatem modi ab? Quia maiores saepe quidem reiciendis nulla molestiae vitae impedit
              voluptatem necessitatibus.
            </p>
          </div>
          <div class="h-[10%] flex items-center">
            <FacebookIcon class="h-4/5 w-fit mr-3" />
            <p class="text-xs">Contactooo</p>
          </div>
        </div>
      </div>

      <footer class="relative h-[10%] rounded-b-[30px] px-8 py-3 flex items-start">
        <p class="text-xs">Vendido por: Fimeño</p>
      </footer>
    </div>
  </div>
</template>
