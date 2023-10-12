<script setup lang="ts">
import NavBarComponent from './components/NavBarComponent.vue'
import VButton from '@/components/VButton.vue'
</script>

<template>
  <NavBarComponent />

  <main class="container h-100">
    <div class="row h-100">
      <div class="col d-flex justify-content-center h-100">
        <div class="">
          <h1 class="fw-bolder fs-64">TU COMIDA A SOLO</h1>
          <h1 class="fw-bolder fs-60">UNOS PASOS</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore porro atque officia,
            labore repellat perspiciatis rerum similique officiis ipsam dicta saepe explicabo in
            eaque reprehenderit distinctio praesentium necessitatibus. Ab, debitis!
          </p>

          <VButton type="secondary">Conoce más</VButton>
        </div>
      </div>
      <div class="col">
        <h1>Col2</h1>
      </div>
    </div>
  </main>
</template>
