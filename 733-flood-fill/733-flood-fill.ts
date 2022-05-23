function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    let visited = {};
    let toVisit = [[sr, sc]];
    let old = image[sr][sc];
    
    let schema = [
        [-1,0],
        [0,-1],[0,1],
        [1,0]
    ]
    
    while(toVisit.length > 0) {
        let [r,c] = toVisit.pop();
        visited[[r,c].join('-')] = true;
        if (image[r][c] != old) {
            continue;
        }
        image[r][c] = newColor;
        for (let [x,y] of schema) {
            x += r;
            y += c;
            if (x < 0 || y < 0 ||  x >= image.length || y >= image[0].length || visited[[x,y].join('-')]) {
                continue;
            }
            toVisit.push([x, y]);
        }
    }
    
    return image;
};