function myPow(x: number, n: number): number {
    if (n === 0) {
        return 1;
    } else if (n === 1) {
        return x;
    }
    
    if (n < 0) {
        x = 1/x;
        n *= -1;
    }
    return n%2 ===0 ? myPow(x*x, Math.floor(n/2)) : myPow(x*x, Math.floor(n/2)) * x;
};