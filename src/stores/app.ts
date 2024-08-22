// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
      categories: [
        { title: "Confêrencia",
          href : "/events/category-conferencias"
         },
        { title: "Workshop",
          href : "/events/category-workshops"
        },
        { title: "Seminário",
          href : "/events/category-seminarios"
         },
        { title: "Reunião de negócios",
          href : "/events/category-reuniaodenegocios"
         },
        { title: "Lançamento de produto",
          href : "/events/category-lançamentosdeprodutos"
         },
        { title: "Treinamento",
          href: "/events/category-treinamentos"
         },
        { title: "Networking",
          href: "/events/category-networking"
         },
        { title: "Webinar",
          href: "/events/category-webinars"
         },
        { title: "Todos",
          href: "/events/category-todos"
         },
      ],
      
    }
  ),
})
