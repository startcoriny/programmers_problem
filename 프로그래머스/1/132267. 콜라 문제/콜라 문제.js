function solution(a, b, n) {
  let getCola = 0;
  for (let i = 0; n >= a; i++) {
    getCola += Math.floor(n / a) * b;
    n = (n % a) + Math.floor(n / a) * b;
  }
  return getCola;
}