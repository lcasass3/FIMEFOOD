<script setup lang="ts">
import CustomerHomePage from './costumer/CustomerHomePage.vue'
import SellerHomePage from './seller/SellerHomePage.vue'
import { useUserStore } from '@/stores/useUserStore'

const user = useUserStore()
</script>
<template>
  <CustomerHomePage v-if="user.roleId === 'customer'" />
  <SellerHomePage v-if="user.roleId === 'seller'" />
</template>
