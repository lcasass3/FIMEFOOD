import { defineStore } from "pinia";
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const userId = ref('2057279')
    const roleId = ref('customer')
    const userContact = ref('https://')
    const userName = ref('Leon Casas')
    const userEmail = ref('leon.csaenz@gmail.com')
    const password = ref('12345')
    const createdAt = ref(new Date)

    return { userId, roleId, userContact, userName, userEmail, password, createdAt }
})