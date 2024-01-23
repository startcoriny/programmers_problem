function solution(n) {
  //45/3 : 15   0
  //15/3 : 5    0
  //5/3  : 1    2
  //1/3  : 0    1
  const modNum = 3;
  let reversNum = [];
  for (let i = n; n > 0; i--) {
    reversNum.unshift(n % modNum);
    n = Math.floor(n / modNum);
  }
  let newarr = reversNum.reduce((a, b, i) => {
    return a + b * modNum ** i;
  }, 0);
  return newarr;
}