function solution(balls, share) {
    
    if(balls === 0 || share === 0){
        return 1
    }
    
    function factorial(num){
        let factorial = 1
        while(num > 0){
            factorial = factorial * num
            num--
        }
        return factorial
    }
    
    
    const factorialB = factorial(balls)
    
    const factorialA = factorial(balls - share) * factorial(share)
        
    return Math.round(factorialB / factorialA)    
}