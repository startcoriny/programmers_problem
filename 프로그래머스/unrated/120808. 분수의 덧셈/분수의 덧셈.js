function solution(numer1, denom1, numer2, denom2) {
    let topNum = numer1 * denom2 + numer2 * denom1;
    let botomNum = denom2 * denom1;
    let maxNum = 1;
    for(let i = 1; i <= topNum; i++){
        if(topNum % i === 0 && botomNum % i === 0){
            maxNum = i;
        }
    }
    return [topNum/maxNum,botomNum/maxNum];
}