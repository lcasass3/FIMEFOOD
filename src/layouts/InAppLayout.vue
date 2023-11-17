<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import { HeartIcon, PlusCircleIcon, HomeIcon } from '@heroicons/vue/20/solid'
import { AdjustmentsHorizontalIcon, UserCircleIcon } from '@heroicons/vue/24/outline'
import { useUserStore } from '@/stores/useUserStore'
import FiltersModal from './components/FiltersModal.vue'

const user = useUserStore()
const isOpen = ref(false)

function openModal() {
  isOpen.value = true
}
function closeModal() {
  isOpen.value = false
}
</script>

<template>
  <aside
    class="bg-white w-1/12 lg:w-[6%] h-screen shadow-md flex justify-center items-end content-end py-6 flex-wrap absolute"
  >
    <AdjustmentsHorizontalIcon
      class="w-2/3 text-primary mb-2 cursor-pointer"
      v-if="user.roleId === 'customer'"
      @click="openModal"
    />
    <FiltersModal v-if="$route.path === '/app/home'" :is-open="isOpen" @close-modal="closeModal" />
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
    />
    <UserCircleIcon
      class="w-2/3 text-primary my-2 cursor-pointer"
      v-if="user.roleId === 'seller'"
    />
    <HomeIcon
      class="w-2/3 text-primary mt-2 cursor-pointer"
      v-if="user.roleId === 'seller'"
      @click="router.push({ path: '/app/home' })"
    />
  </aside>

  <main class="w-11/12 lg:w-[94%] h-screen absolute right-0">
    <RouterView />
  </main>
</template>
