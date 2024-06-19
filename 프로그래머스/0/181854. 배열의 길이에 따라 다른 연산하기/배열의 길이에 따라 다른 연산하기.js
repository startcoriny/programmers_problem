function solution(arr, n) {
    var answer = [];
    for(let i=0; i < arr.length; i++){
        if(arr.length % 2 !== 0){
            i % 2 ===0 ? answer.push(arr[i]+n) : answer.push(arr[i])
        }else{
            i % 2 !==0 ? answer.push(arr[i]+n) : answer.push(arr[i])
        }
    }
    return answer;
}