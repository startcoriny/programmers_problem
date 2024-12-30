function solution(i, j, k) {
    
    let count = 0
    for(let start = i; start <= j; start++){
        
        const numStr = start.toString()
        
        for(let num of numStr){
            if(num === String(k)){
                count++
            }
            
        }
    }
    
    return count
}