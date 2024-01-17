function solution(a, b) {
    let newNum = 0;
    for (let i = 0; i < a.length; i++) {
        newNum += a[i]*b[i];
    }
    return newNum;
}