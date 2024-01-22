function solution(n, m) {
    let maxNum= minNum = 0;
    for (let i = 1; i <= m; i++) {
        if(n%i===0 && m%i===0){
            maxNum = i;
        }
    }
    minNum = (n*m)/maxNum

    let answer = [maxNum,minNum]
  return answer;
}