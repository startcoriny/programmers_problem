function solution(arr, k) {
    
    if(k % 2 !== 0){
        return arr.map(num=>num*k)
    }else if(k % 2 === 0){
        return arr.map(num=>num+k)
    }
}