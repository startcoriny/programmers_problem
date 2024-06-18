function solution(arr) {
    var answer = [];
    let n = arr.length;
    let i = 0;

    while (n > Math.pow(2, i)) {
        i++;
    }

    let minNum = Math.pow(2, i) - n;
    answer = [...arr, ...new Array(minNum).fill(0)];
    
    return answer;
}
