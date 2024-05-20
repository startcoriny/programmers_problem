function solution(numbers, k) {
    let n = numbers.length;
    let j = 0, i = 0, answer = 0
    while(i < k){
        if(j >= n){
            j = j%n
        }
        answer = numbers[j]
        j = j+2; 
        i++;
    }
    return answer
}