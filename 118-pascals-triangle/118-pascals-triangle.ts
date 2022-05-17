function generate(numRows: number): number[][] {
    if (numRows === 1) {
        return [[1]];
    } else if (numRows === 2) {
        return [[1],[1,1]];
    }
    let res: number[][] = [[1],[1,1]];
    for (let i = 2; i < numRows; i++) {
        res[i] = [1];
        for (let j = 1; j < i; j++) {
            res[i][j] = res[i-1][j-1] + res[i-1][j];
        }
        res[i].push(1)
    }
    return res;
};