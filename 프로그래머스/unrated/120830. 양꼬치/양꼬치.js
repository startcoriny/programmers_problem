function solution(n, k) {
  let totY = 12000*n //1500000
  let totJ = n >= 10 ? (k - Math.floor(n/10))*2000:k * 2000;

  return totY+totJ
}