/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let last = s.length-1;
    for (let i=0; i < Math.floor(s.length / 2); i++) {
        let bk = s[i];
        s[i] = s[last - i];
        s[last - i] = bk;
    }
};