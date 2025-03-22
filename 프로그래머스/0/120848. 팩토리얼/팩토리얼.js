function solution(n) {
    
    const numList = [1]
    
    let num = 2
    
    let factorial = 1
    
    while(factorial <= n){
        
        factorial *= num
        
        if(factorial > n){
            break;
        }
        
        numList.push(num)
        
        num++
    }
        
    return Math.max(...numList);
}