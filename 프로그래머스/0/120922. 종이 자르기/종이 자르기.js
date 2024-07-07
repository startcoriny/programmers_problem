function solution(M, N) {
    let width = 0
    let length = 0
    for(let i = M; i > 1; i--){
        width++
    }
    for(let i = N; i > 1; i--){
        length++
    }
    
    if(width===0 && length === 0){
        return 0
    }
    
    return width + (length*(width+1))
}