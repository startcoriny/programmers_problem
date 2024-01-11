function solution(n) {
    return Math.sqrt(n)>0&&n%Math.sqrt(n)===0? Math.pow(Math.sqrt(n)+1,2):-1; 
}