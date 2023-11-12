<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import VButton from '@/components/VButton.vue'
import CostumerSignUpPage from './costumer/CostumerSignUpPage.vue'
import SellerSignUpPage from './seller/SellerSignUpPage.vue'
import VGoBackComponent from '@/components/VGoBackComponent.vue'

const isCostumer = ref(false)
const isSeller = ref(false)

function costumerMovementHandler(activePage: boolean) {
  isCostumer.value = activePage
}

function sellerMovementHandler(activePage: boolean) {
  isSeller.value = activePage
}
</script>

<template>
  <main class="flex items-center justify-center h-screen w-screen">
    <VGoBackComponent v-if="!isCostumer && !isSeller" @click="router.push({ path: '/' })" />
    <dialog
      v-if="!isCostumer && !isSeller"
      open
      class="bg-white w-1/3 rounded-3xl p-12 flex items-center justify-center max-h-fit max-w-md shadow-md"
    >
      <div>
        <h1 class="text-2xl font-medium mb-8">Deseo crear una cuenta como:</h1>
        <VButton type="primary" class="w-full mb-2 px-6" @click="isCostumer = true"
          >Comprador</VButton
        >
        <VButton type="primary" class="w-full mt-2 px-6" @click="isSeller = true">Vendedor</VButton>
      </div>
    </dialog>

    <CostumerSignUpPage v-if="isCostumer" @page-movement="costumerMovementHandler" />
    <SellerSignUpPage v-if="isSeller" @page-movement="sellerMovementHandler" />
  </main>
</template>
