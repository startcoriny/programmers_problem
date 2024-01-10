function solution(x, n) {
    var answer = [];
    let sumNum = 0
    while(answer.length<n){
        sumNum += x;
        answer.push(sumNum)
    }
    return answer;
}