<script setup lang="ts">
import { ExclamationTriangleIcon, HeartIcon } from '@heroicons/vue/20/solid'

const props = defineProps<{
  isSecondaryModalOpen: boolean
  firstText?: string
  secondText?: string
}>()

defineEmits<{
  (e: 'closeSecondaryModal'): void
}>()
</script>

<template>
  <div
    class="fixed inset-0 transition-opacity w-full z-50"
    :class="{
      'opacity-100 ease-in duration-300 pointer-events-auto': props.isSecondaryModalOpen,
      'opacity-0 ease-out duration-200 pointer-events-none': !props.isSecondaryModalOpen
    }"
  >
    <div @click="$emit('closeSecondaryModal')" name="modal" class="fixed inset-0"></div>
    <div class="absolute bg-white rounded-lg shadow-full h-fit w-fit text-xs p-2 top-0 right-5">
      <div class="flex items-center cursor-pointer">
        <ExclamationTriangleIcon class="w-4 mr-2 text-red-700" />
        <p>
          <small>{{ props.firstText }}</small>
        </p>
      </div>
      <div class="flex items-center cursor-pointer" v-if="props.secondText">
        <HeartIcon class="w-4 mr-2 text-primary" />
        <p>
          <small>{{ props.secondText }}</small>
        </p>
      </div>
    </div>
  </div>
</template>
