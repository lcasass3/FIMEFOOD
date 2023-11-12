<script setup lang="ts">
import VNavBar from '@/components/VNavBar.vue'
import AboutUsButton from './components/AboutUsButton.vue'
</script>

<template class="h-screen">
  <header class="h-[10vh]">
    <VNavBar />
  </header>

  <main class="h-[90vh] grid grid-cols-2 px-12">
    <div class="h-full flex items-center">
      <div class="ml-8">
        <h1 class="text-6xl font-semibold text-font">TU COMIDA A SOLO</h1>
        <h1 class="text-6xl font-semibold">UNOS PASOS</h1>
        <hr class="border border-secondary my-3 w-1/4" />
        <p class="text-sm w-2/3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ipsa beatae dignissimos
          deserunt, est tempore eaque veniam delectus facilis animi hic natus adipisci aperiam
          laboriosam saepe earum perspiciatis minus dolorum!
        </p>
        <AboutUsButton class="mt-4" />
      </div>
    </div>
    <div class="flex items-center justify-end h-full">
      <img src="@/assets/images/gatoFime.jpg" alt="Foto de gato" class="h-3/4" />
    </div>
  </main>
</template>
