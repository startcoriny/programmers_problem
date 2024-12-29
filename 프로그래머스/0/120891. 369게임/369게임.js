function solution(order) {
    
    let crapCnt = 0
    order = order + ""
    for(let i = 0; i < order.length; i++){
        if(order[i] === "3" || order[i] === "6" || order[i] === "9"){
            crapCnt += 1;
        }
    }
    
    return crapCnt
}