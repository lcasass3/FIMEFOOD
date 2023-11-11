<script setup lang="ts">
import NavBar from './NavBar.vue'
import SelectingTeamIcon from '@/assets/icons/SelectingTeamIcon.vue'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import FacebookIcon from '@/assets/icons/FacebookIcon.vue'
import InstagramIcon from '@/assets/icons/InstagramIcon.vue'
</script>

<template class="h-screen w-screen">
  <header class="h-[10vh]">
    <NavBar />
  </header>

  <main class="h-[80vh] grid grid-cols-2 px-12">
    <div class="h-full flex items-center">
      <div class="w-2/3">
        <h1 class="text-5xl font-semibold">SOBRE NOSOTROS</h1>
        <hr class="border border-secondary my-3 w-1/4" />
        <p class="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe voluptatibus doloribus
          blanditiis est earum necessitatibus expedita praesentium sequi magni tempore, fuga, labore
          possimus quidem aliquam officiis quo fugiat esse unde!
        </p>
      </div>
    </div>
    <div class="h-full flex items-center justify-center">
      <SelectingTeamIcon class="w-4/5" />
    </div>
  </main>
  <footer class="h-[10vh] w-full">
    <div class="flex items-end justify-evenly absolute inset-x-0 bottom-2">
      <div class="flex items-center text-sm">
        <EnvelopeIcon class="w-6 h-6 mr-4" />
        <a href="">example@email.com</a>
      </div>
      <div class="flex items-center text-sm">
        <FacebookIcon class="w-6 h-6 mr-4" />
        <a href="">FIMEFOOD</a>
      </div>
      <div class="flex items-center text-sm">
        <InstagramIcon class="w-6 h-6 mr-4" />
        <a href="">FIME_FOOD</a>
      </div>
    </div>
  </footer>
</template>
