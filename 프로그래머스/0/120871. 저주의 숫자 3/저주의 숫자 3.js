function solution(n) {
 
    let addNum = 0
    
    for(let i = 1; i <= n; i++){
    
         ++addNum
        
        while(addNum%3 === 0 || /3/.test(String(addNum))){
            ++addNum
        }


    }
    
    return addNum;
}