function calcMatrixIndexes(n: number, index: number): [number, number] {
  let row = Math.floor(index / n);
  let col = index % n;
  return [row, col];
}

function searchMatrix(matrix: number[][], target: number): boolean {
  let res = false;

  let m = matrix.length,
    n = matrix[0].length;
  // check it exists in between
  if (matrix[0][0] > target) {
    return res;
  } else if (matrix[m - 1][n - 1] < target) {
    return res;
  }

  // binary matrix
  let min = 0,
    max = m * n - 1;

  while (min <= max) {
    let avg = Math.floor((min + max) / 2);
    let indexes = calcMatrixIndexes(n, avg);
    let elm = matrix[indexes[0]][indexes[1]];

    if (elm === target) {
      res = true;
      break;
    } else if (elm < target) {
      min = avg + 1;
    } else {
      max = avg - 1;
    }
  }
  return res;
}