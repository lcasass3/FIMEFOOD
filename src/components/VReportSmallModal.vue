<script setup lang="ts">
import { ExclamationTriangleIcon, HeartIcon } from '@heroicons/vue/20/solid'

const props = defineProps<{
  isReportModalOpen: boolean
  firstText?: string
  secondText?: string
}>()

defineEmits<{
  (e: 'closeReportModal'): void
  (e: 'openReportDetail'): void
}>()
</script>

<template>
  <div
    class="fixed inset-0 transition-opacity w-full z-50"
    :class="{
      'opacity-100 ease-in duration-300 pointer-events-auto': props.isReportModalOpen,
      'opacity-0 ease-out duration-200 pointer-events-none': !props.isReportModalOpen
    }"
  >
    <div @click="$emit('closeReportModal')" name="modal" class="fixed inset-0"></div>
    <div class="absolute bg-white rounded-lg shadow-full h-fit w-fit text-sm p-2 top-0 right-5">
      <div
        v-if="props.firstText"
        @click="$emit('openReportDetail'), $emit('closeReportModal')"
        class="flex items-center cursor-pointer"
      >
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
