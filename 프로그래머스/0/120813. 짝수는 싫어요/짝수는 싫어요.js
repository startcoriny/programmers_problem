function solution(n) {
    
    const num = []
    
    for(let i = 1; i <=n; i++){
        if(i%2 !== 0){
            num.push(i)
        }
    }
    
    return num
}