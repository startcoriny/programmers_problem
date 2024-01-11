function solution(x) {
    let stirngnum = (x + "").split("");
    let numSum = 0;
    for (let i = 0; i < stirngnum.length; i++) {
        numSum += parseInt(stirngnum[i])
    }
    return x%numSum ===0? true : false;
}