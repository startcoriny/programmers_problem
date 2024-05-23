function solution(arr, queries) {
    queries.forEach((query)=>{
        const [s,e,k] = query
        for(let i = 0; i < e+1; i++){
            if(i >= s && i <= e && i % k == 0){
                arr[i] = arr[i] + 1
            }
        }
    })
    return arr
}