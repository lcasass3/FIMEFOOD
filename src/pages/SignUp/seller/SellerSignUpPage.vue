<script setup lang="ts">
import { ref } from 'vue'
import SellerSignUpFirstStage from './stages/SellerSignUpFirstStage.vue'
import SellerSignUpSecondStage from './stages/SellerSignUpSecondStage.vue'
import SellerSignUpThirdStage from './stages/SellerSignUpThirdStage.vue'
import VGoBackComponent from '@/components/VGoBackComponent.vue'

defineEmits<{
  (e: 'pageMovement', activePage: boolean): void
}>()

const activeStage = ref(0)

function stageMovementHandler(stage: number) {
  activeStage.value = stage
}
</script>

<template>
  <VGoBackComponent v-if="activeStage === 0" @click="$emit('pageMovement', false)" />

  <SellerSignUpFirstStage v-if="activeStage === 0" @stage-movement="stageMovementHandler" />
  <SellerSignUpSecondStage v-if="activeStage === 1" @stage-movement="stageMovementHandler" />
  <SellerSignUpThirdStage v-if="activeStage === 2" @stage-movement="stageMovementHandler" />
</template>
