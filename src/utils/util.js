export const getCategory = (item) => {

    switch (item.toLowerCase()) {
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
