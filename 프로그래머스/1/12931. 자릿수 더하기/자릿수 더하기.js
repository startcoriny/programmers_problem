function solution(n)
{
    // 1가져오기
    let numStirng = n+"s";
    let tot = 0;
    for (let i = 0; i < numStirng.length-1; i++) {
        tot += parseInt(numStirng[i])
    }
    return tot;

}
console.log(solution(987));