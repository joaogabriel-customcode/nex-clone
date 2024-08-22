// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
      categories: [
        { title: "Confêrencia",
          href : "/event-sale/Conferências"
         },
        { title: "Workshop",
          href : "/event-sale/Workshops"
        },
        { title: "Seminário",
          href : "/event-sale/Seminários"
         },
        { title: "Reunião de negócios",
          href : "/event-sale/Reunião de negócios"
         },
        { title: "Lançamento de produto",
          href : "Lançamentos de produtos"
         },
        { title: "Treinamento",
          href: "/event-sale/Treinamentos"
         },
        { title: "Networking",
          href: "/event-sale/Networking"
         },
        { title: "Webinar",
          href: "/event-sale/Webinars"
         },
        { title: "Todos",
          href: "/event-sale/Todos"
         },
      ],
      
    }
  ),
})
