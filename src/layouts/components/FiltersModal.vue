<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  (e: 'closeModal'): void
}>()
</script>

<template>
  <div
    class="fixed inset-0 transition-opacity z-50"
    :class="{
      'opacity-100 ease-in duration-300 pointer-events-auto': props.isOpen,
      'opacity-0 ease-out duration-200 pointer-events-none': !props.isOpen
    }"
  >
    <div @click="$emit('closeModal')" name="modal" class="fixed inset-0"></div>
    <div
      class="modal-content absolute bg-white rounded-lg shadow-full w-1/6 max-w-xl h-1/4 left-[7%] lg:left-[5%] bottom-[5%] lg:bottom-[15%] p-4"
    >
      <div class="h-full w-full flex flex-col flex-wrap">
        <div>
          <input
            type="checkbox"
            checked
            id="recentsFilter"
            class="shrink-0 mr-4 border-primary rounded-sm text-primary focus:ring-0"
          />
          <label for="recentsFilter" class="text-xs">Recientes</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="favoritesFilter"
            class="shrink-0 mr-4 border-primary rounded-sm text-primary focus:ring-0"
          />
          <label for="favoritesFilter" class="text-xs">Favoritos</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="mealsFilter"
            class="shrink-0 mr-4 border-primary rounded-sm text-primary focus:ring-0"
          />
          <label for="mealsFilter" class="text-xs">Comidas</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="candiesFilter"
            class="shrink-0 mr-4 border-primary rounded-sm text-primary focus:ring-0"
          />
          <label for="candiesFilter" class="text-xs">Dulces</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="coffeFilter"
            class="shrink-0 mr-4 border-primary rounded-sm text-primary focus:ring-0"
          />
          <label for="coffeFilter" class="text-xs">Café</label>
        </div>
      </div>
    </div>
  </div>
</template>
