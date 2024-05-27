function solution(n, k) {
    // 1이상 n 이하의 정수 = i
    // k의 배수 => i % k => 0 
    // 오름차순 정리 => sort
    var answer = [];
    for(let i = 1; i <= n; i++){
        if(i%k === 0){
            answer.push(i)
        }
    }
    return answer;
}