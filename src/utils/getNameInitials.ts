export function firstAndLastWordFirstLetters(inputString: string): string {
    // Remove espaços extras no início e fim da string e separa as palavras
    const words: string[] = inputString.trim().split(/\s+/);
  
    // Verifica se há pelo menos uma palavra
    if (words.length === 0) {
      return '';
    }
  
    // Pega a primeira letra da primeira palavra
    const firstLetter: string = words[0][0];
  
    // Pega a primeira letra da última palavra
    const lastLetter: string = words[words.length - 1][0];
  
    // Retorna a concatenação das duas letras
    return firstLetter + lastLetter;
  }