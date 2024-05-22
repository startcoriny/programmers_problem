function solution(arr, queries) {
    let narr = [];
    for(let i = 0; i<queries.length; i++){
        
        const[s, e, k] = queries[i]
        
        mins = arr.filter((num,i)=> i>=s && num > k && i <= e)
        mins.sort((a,b)=>a-b)
        if(mins.length === 0){
            mins.push(-1)
        }
        narr.push(mins[0])
    }
    return narr
}