export const getCategory = (item) => {
  if(!item || !item.category) {
    switch (item.category.toLowerCase()) {
      case 'conferencias':
        return 'Conferência';
      case 'workshops':
        return 'Workshop';
      case 'seminarios':
        return 'Seminário';
      case 'reuniaodenegocios':
        return 'Reunião de negócios';
      case 'lancamentosdeprodutos':
        return 'Lançamento de produto';
      case 'treinamentos':
        return 'Treinamento';
      case 'networking':
        return 'Networking';
      case 'webinars':
        return 'Webinar';
      case 'todos':
        return 'Todos';
      default:
        return 'Categoria desconhecida';
    }
  }
}
