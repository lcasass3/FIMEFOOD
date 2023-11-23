<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import { HeartIcon, PlusCircleIcon, HomeIcon } from '@heroicons/vue/20/solid'
import { AdjustmentsHorizontalIcon, UserCircleIcon } from '@heroicons/vue/24/outline'
import { useUserStore } from '@/stores/useUserStore'
import FiltersModal from './components/FiltersModal.vue'
import SelectPublicationTypeModal from '@/pages/Home/seller/components/SelectPublicationTypeModal.vue'

const user = useUserStore()

const isFilterModalOpen = ref(false)
function openFilterModal() {
  isFilterModalOpen.value = true
}
function closeFilterModal() {
  isFilterModalOpen.value = false
}

const isNewPublicationModalOpen = ref(false)
function openNewPubliModal() {
  isNewPublicationModalOpen.value = true
}
function closeNewPubliModal() {
  isNewPublicationModalOpen.value = false
}
</script>

<template>
  <aside
    class="bg-white w-1/12 lg:w-[6%] h-screen shadow-md flex justify-center items-end content-end py-6 flex-wrap absolute"
  >
    <AdjustmentsHorizontalIcon
      class="w-2/3 text-primary mb-2 cursor-pointer"
      v-if="user.roleId === 'customer'"
      @click="openFilterModal"
    />
    <HeartIcon
      class="w-2/3 text-primary my-2 cursor-pointer"
      v-if="user.roleId === 'customer'"
      @click="router.push({ path: '/app/favoritos' })"
    />
    <HomeIcon
      class="w-2/3 text-primary mt-2 cursor-pointer"
      v-if="user.roleId === 'customer'"
      @click="router.push({ path: '/app/home' })"
    />

    <PlusCircleIcon
      class="w-2/3 text-primary mb-2 cursor-pointer"
      v-if="user.roleId === 'seller'"
      @click="openNewPubliModal"
    />
    <UserCircleIcon
      class="w-2/3 text-primary my-2 cursor-pointer stroke-1"
      v-if="user.roleId === 'seller'"
      @click="router.push({ path: '/app/perfil-vendedor' })"
    />
    <HomeIcon
      class="w-2/3 text-primary mt-2 cursor-pointer"
      v-if="user.roleId === 'seller'"
      @click="router.push({ path: '/app/home' })"
    />
  </aside>

  <main class="w-11/12 lg:w-[94%] h-screen max-h-[100vh] absolute right-0 overflow-auto">
    <FiltersModal
      v-if="$route.path === '/app/home' && user.roleId === 'customer'"
      :is-open="isFilterModalOpen"
      @close-modal="closeFilterModal"
    />
    <SelectPublicationTypeModal
      v-if="$route.path === '/app/home' && user.roleId === 'seller'"
      :is-open="isNewPublicationModalOpen"
      @close-modal="closeNewPubliModal"
    />
    <RouterView />
  </main>
</template>
