<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import AboutButton from './components/AboutButton.vue'
</script>

<template>
  <NavBar />
  <body class="overflow-hidden">
    <main class="container vh-90 mx-5 px-1 position-absolute">
      <div class="row vh-90 position-relative align-items-center">
        <div class="col position-relative flex">
          <div class="position-relative">
            <h1 class="fw-bolder fs-64 text-hardGreen">TU COMIDA A SOLO</h1>
            <h1 class="fw-bolder fs-60">UNOS PASOS</h1>
            <p class="fs-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore porro atque
              officia, labore repellat perspiciatis rerum similique officiis ipsam dicta saepe
              explicabo in eaque reprehenderit distinctio praesentium necessitatibus. Ab, debitis!
            </p>
            <AboutButton />
          </div>
        </div>

        <div class="col position-relative">
          <div class="position-relative">
            <img src="@/assets/images/gatoFime.jpg" alt="Imagen de gato" class="img-fluid" />
          </div>
        </div>
      </div>
    </main>
  </body>
</template>
