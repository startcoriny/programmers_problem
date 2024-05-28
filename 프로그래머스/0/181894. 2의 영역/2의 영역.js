function solution(arr) {
    var answer = [];
    let doubleIndex = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 2){
                doubleIndex.push(i)
        }
    }
    if(doubleIndex.length === 0){
        answer[0] = -1
    } else if(doubleIndex.length === 1){
        answer = arr.splice(doubleIndex[0], 1)
    }else{
        answer = arr.slice(doubleIndex[0],doubleIndex[doubleIndex.length-1]+1)
    }
    
    return answer;
}