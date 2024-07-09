function solution(n) {
  let number = Math.sqrt(n);
  return Math.pow(Math.floor(number), 2) === n ? 1 : 2;
}