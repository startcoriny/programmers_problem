function solution(arr, k) {
    let answer = []
    let result = arr.filter((num,i)=> {
        if(i > 0){
            answer.push(arr[i-1])   
        }
        return !answer.includes(num)
    })
    
    if(result.length < k){
        for(let i = result.length; i < k; i++){
            result.push(-1)
        }
    }else{
        result = result.slice(0, k)
    }
    
    return result
}