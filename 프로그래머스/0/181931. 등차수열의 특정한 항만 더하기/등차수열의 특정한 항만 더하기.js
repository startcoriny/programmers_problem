function solution(a, d, included) {
    let ap = [];
    ap[0] = a 
    let nterm = 0;
    let tot = 0;
    
    for(let i = 1; i <included.length; i++){
        nterm = ap[i-1]
        ap[i] = nterm + d
    }
    
    for(let i = 0; i <included.length; i++){
        if(included[i]===true){
            tot += ap[i]
        }
    }
    
    return tot
}