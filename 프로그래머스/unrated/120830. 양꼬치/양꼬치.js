function solution(n, k) {
  let totY = 12000*n
  let totJ = 0;
  if(n >= 10){
    totJ = (k - Math.floor(n/10))*2000
  }else{
    totJ = k * 2000
  }
  return totY+totJ
}