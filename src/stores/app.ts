// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
      categories: [
        { title: "Confêrencia" },
        { title: "Workshop" },
        { title: "Seminário" },
        { title: "Reunião de negócios" },
        { title: "Lançamento de produto" },
        { title: "Treinamento" },
        { title: "Networking" },
        { title: "Webinar" },
        { title: "Todos" },
      ],
    }
  ),
})
