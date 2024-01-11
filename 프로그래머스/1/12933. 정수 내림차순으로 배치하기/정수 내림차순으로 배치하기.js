function solution(n) {
    let arrNum = []
    for (let i = 0; n>0; i++) {
        mod = n%10;
        arrNum.push(mod);
        n = Math.floor(n/10);
    }
    return parseInt(arrNum.sort((a,b) => b-a).join(""))
}