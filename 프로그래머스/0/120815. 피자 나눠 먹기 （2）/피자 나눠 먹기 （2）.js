function solution(n) {
    var answer = 0;
    
    // 피자 조각수 = 6
    
    // n이 피자조각의 첫 6의 배수이면 됨.
    
    let whileFlag = true
    let i = 0
    let pizzaCnt = 0
    
    while(whileFlag){
        i++
        if((n * i) % 6 === 0){
            pizzaCnt = (n * i) / 6
            whileFlag = false
        }
    }
    
    return pizzaCnt    
}