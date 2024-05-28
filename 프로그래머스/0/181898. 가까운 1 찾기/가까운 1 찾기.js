function solution(arr, idx) {
    var answer = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(i >= idx && arr[i] === 1){
            answer = i
            break;
        }
        if(i === arr.length-1 && arr[i] === 0){
            answer = -1
        }
    }
    
    return answer;
}