function solution(n) {
    let arr = Array.from({length:n},()=>new Array(n))
    
    // 00 01 02 03 
    // 10 11 12 13
    // 20 21 22 23
    // 30 31 32 33
    
    // 행 : r, 열 : c, 회전수 : n, 증감: p,
    
    let r = 0, c = -1, p = 1
    
    for(let v = 1; ;){
        for(let i = 0; i < n; i++){
            arr[r][c += p] = v++
        }
        
        if(--n <= 0){
            break;
        }
        
        for(let i = 0; i < n; i++){
            arr[r+=p][c] = v++
        }
        
        p = -p
        
    }
    return arr;
}