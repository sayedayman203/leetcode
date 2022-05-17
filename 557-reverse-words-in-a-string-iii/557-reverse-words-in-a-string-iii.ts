function reverseWords(s: string): string {
    return s.split(' ').map(x=> x.split('').reverse().join('')).join(' ');
};