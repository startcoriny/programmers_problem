function solution(n) {
    
    let doubleNumCnt = 0
          
    for(let i = 1; i * i <= n; i++){
        
        if(n % i === 0){
            doubleNumCnt += (i*i === n) ? 1 : 2
        }
    }
    
    return doubleNumCnt
}