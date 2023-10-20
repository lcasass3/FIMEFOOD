<script setup lang="ts">
import NavBar from './NavBar.vue'
import SelectingTeamIcon from '@/assets/icons/SelectingTeamIcon.vue'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import FacebookIcon from '@/assets/icons/FacebookIcon.vue'
import InstagramIcon from '@/assets/icons/InstagramIcon.vue'
</script>

<template>
  <body class="overflow-hidden vh-100">
    <NavBar />
    <main class="container mx-5 px-1 vh-80 position-absolute">
      <div class="row h-100 align-items-center">
        <div class="col d-flex justify-content-start">
          <div class="w-75 ms-4">
            <h1 class="fw-bold fs-48 w-75">SOBRE NOSOTROS</h1>
            <hr class="border border-1 border-primary opacity-100 my-1 w-25" />
            <p class="fs-6 w-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore porro atque
              officia, labore repellat perspiciatis rerum similique officiis ipsam dicta saepe
              explicabo in eaque reprehenderit distinctio praesentium necessitatibus. Ab, debitis!
            </p>
          </div>
        </div>

        <div class="col d-flex justify-content-center">
          <div class="h-75 w-75">
            <!-- <a href="https://storyset.com/people">People illustrations by Storyset</a> -->
            <SelectingTeamIcon />
          </div>
        </div>
      </div>
    </main>
  </body>
  <footer
    class="container-fluid position-absolute bottom-0 vh-10 p-2 d-flex align-items-center mx-5 justify-content-evenly fs-0"
  >
    <div>
      <EnvelopeIcon class="me-4" style="height: 35px" />
      <a href="mailto:">exampleFIMEFOOD@email.com</a>
    </div>
    <div>
      <FacebookIcon class="me-4" />
      <a href="http://">FIMEFOOD</a>
    </div>
    <div>
      <InstagramIcon class="me-4" />
      <a href="http://">FIME_FOOD</a>
    </div>
  </footer>
</template>
