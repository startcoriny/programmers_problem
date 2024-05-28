function solution(arr, query) {
    // query를 순회 하면서 arr을 조작한다.
    
    // query의 짝수 인덱스
    // arr의 query인덱스 +1부분을 잘라서 버린다.
    
    // query의 홀수 인덱스
    // arr의 query인덱스 -1부분을 잘라서 버린다.
    
    for(let i = 0; i < query.length; i++){
        if(i%2 === 0){
            arr = arr.slice(0, query[i]+1)
            console.log("짝수",arr)
        }else{
            arr = arr.slice(query[i])
            console.log("홀수",arr)
        }
    }
    return arr;
}