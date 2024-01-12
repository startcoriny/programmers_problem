function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter(num=>num%divisor===0)
    answer.length>0?answer.sort((a,b)=>a-b):answer[0]=-1
    return answer;
}