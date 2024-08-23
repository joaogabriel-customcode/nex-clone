export function firstAndLastWordFirstLetters(inputString: string): string {

    const words: string[] = inputString.trim().split(/\s+/);
  

    if (words.length === 0) {
      return '';
    }
  

    const firstLetter: string = words[0][0];
  

    const lastLetter: string = words[words.length - 1][0];

    return firstLetter + lastLetter;
  }