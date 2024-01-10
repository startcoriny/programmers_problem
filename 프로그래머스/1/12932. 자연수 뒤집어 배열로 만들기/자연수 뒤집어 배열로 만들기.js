function solution(n) {
    var answer = [];
    let remainder = 0;
    for (let i = 0; n > 0; i++) {
        remainder = n % 10;
        n = Math.floor(n /10);
        answer.push(remainder);
    }
    return answer;
}