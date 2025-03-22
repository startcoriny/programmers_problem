function solution(n) {
    
    let addNumCnt = 0
    
    for(let j = 4; j <=n; j++){
     
        let cnt = 0
        for(let i = 1; i * i <= j; i++){

            if(j % i === 0){
                cnt += (i * i === j) ? 1 : 2;
            }

        }
        addNumCnt += (cnt >= 3) ? 1 : 0
        
    }
    
    
    return addNumCnt;
}