function solution(n, t) {
    let tot = n;
    for(let i = 2; i<=t+1; i++){
        tot *= 2;
    }
    return tot;
}