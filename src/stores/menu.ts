import { defineStore } from "pinia";

export const useMenuStore = defineStore('menu', () => { 
    const menuState = ref<boolean>(false)

    function changeMenu() { 
        menuState.value = !menuState.value
    }

    return { menuState, changeMenu }
}) 