type Tracker = { [key: string]: boolean };
function isValidSudoku(board: string[][]): boolean {
  let x_tracker: Tracker = {};
  let y_tracker: Tracker[] = [];
  let boxes_tracker: Tracker[] = [{}, {}, {}];
  let valid = true;
  for (let i = 0; i < 9; i++) {
    x_tracker = {};
    if (i % 3 === 0) {
      boxes_tracker = [{}, {}, {}];
    }

    for (let j = 0; j < 9; j++) {
      const n = board[i][j];

      if (i === 0) {
        y_tracker.push({});
      }

      if (n === '.') {
        continue;
      }

      // x-axis check
      if (x_tracker[n]) {
        valid = false;
        break;
      } else {
        x_tracker[n] = true;
      }

      // y-axis check
      if (y_tracker[j][n]) {
        valid = false;
        break;
      } else {
        y_tracker[j][n] = true;
      }

      // box check
      const box_n = Math.floor(j / 3);
      if (boxes_tracker[box_n][n]) {
        valid = false;
        break;
      } else {
        boxes_tracker[box_n][n] = true;
      }
    }

    if (!valid) {
      break;
    }
  }

  return valid;
}