function solution(board, k) {
  let tot = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length && i + j <= k; j++) {
      tot = tot + board[i][j];
    }
  }
  return tot;
}