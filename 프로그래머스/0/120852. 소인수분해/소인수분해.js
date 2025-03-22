function solution(n) {
    
    const factorList = []
    
    let divisor = 2
    
    while(n >= 2){
        
        if(n % divisor === 0){
            factorList.push(divisor)
            n = n / divisor;
        }else{
            divisor++
        }
    }
    
    
    return [...new Set(factorList)]
}