function maxAreaOfIsland(grid: number[][]): number {
    let max = 0;
    let m = grid.length;
    let n = grid[0].length;
    
    let shadow = [
        [-1,0], [0,-1], [0,1], [1,0]
    ];
    
    const check = (i,j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) {
            return 0;
        }
        
        grid[i][j] = 0;
        let total = 1;
        
        for (let [x, y] of shadow) {
            x += i;
            y += j;
            total += check(x,y);
        }
        return total;
    }
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (grid[i][j]) {
                max = Math.max(max, check(i,j));
            }
        }
    }
    
    return max;
};