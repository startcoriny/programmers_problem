function solution(n) {
    let tot = 0;
    
    for(let i = 1; i <= n; i++){
        if(n%2 === 1){
            if(i%2 === 1){
                tot += i;
            }
        }else{
            if(i%2 === 0){
                tot += i*i;
            }
        }
    }
    return tot;
}