function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    if (r*c !== mat.length * mat[0].length) {
        return mat;
    }
    
    let reshaped: number[][] = [...Array(r)].map(x=>[]);
    for (let i = 0, m = 0, n = 0; i < r; i++) {
        while (reshaped[i].length < c) {
            let row_remain = mat[0].length - n;
            if (row_remain  < 1) {
                m++;
                n = 0;
                row_remain = mat[0].length;
            }
            
            const remain = c - reshaped[i].length;
            if (remain >=n +row_remain) {
                reshaped[i].push(...mat[m].slice(n, n +row_remain));
                n = n +row_remain;
            } else {
                reshaped[i].push(...mat[m].slice(n, n +remain));
                n = n + remain;
            }
            
        }
    }
    return reshaped;
};