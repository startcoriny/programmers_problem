function solution(n) {
  let tot = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      tot = tot + i;
      console.log(tot);
    }
  }
  return tot;
}