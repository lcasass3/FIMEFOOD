<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/20/solid'
import { AdjustmentsHorizontalIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <aside
    class="bg-white w-1/12 lg:w-[6%] h-screen shadow-md flex justify-center items-end content-end py-6 flex-wrap absolute"
  >
    <AdjustmentsHorizontalIcon class="w-2/3 text-primary mb-2 cursor-pointer" />
    <HeartIcon class="w-2/3 text-primary mt-2 cursor-pointer" />
  </aside>

  <main class="w-11/12 lg:w-[94%] h-screen absolute right-0">
    <RouterView />
  </main>
</template>
