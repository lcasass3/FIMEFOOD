<script setup lang="ts">
import { HeartIcon, PlusCircleIcon } from '@heroicons/vue/20/solid'
import { AdjustmentsHorizontalIcon, UserCircleIcon } from '@heroicons/vue/24/outline'
import { useUserStore } from '@/stores/useUserStore'

const user = useUserStore()
</script>

<template>
  <aside
    class="bg-white w-1/12 lg:w-[6%] h-screen shadow-md flex justify-center items-end content-end py-6 flex-wrap absolute"
  >
    <AdjustmentsHorizontalIcon
      class="w-2/3 text-primary mb-2 cursor-pointer"
      v-if="user.roleId === 'customer'"
    />
    <HeartIcon class="w-2/3 text-primary mt-2 cursor-pointer" v-if="user.roleId === 'customer'" />

    <PlusCircleIcon
      class="w-2/3 text-primary mb-2 cursor-pointer"
      v-if="user.roleId === 'seller'"
    />
    <UserCircleIcon
      class="w-2/3 text-primary mb-2 cursor-pointer"
      v-if="user.roleId === 'seller'"
    />
  </aside>

  <main class="w-11/12 lg:w-[94%] h-screen absolute right-0">
    <RouterView />
  </main>
</template>
