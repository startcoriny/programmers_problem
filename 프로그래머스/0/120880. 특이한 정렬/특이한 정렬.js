function solution(numlist, n) {
    const resultList = [];
    const numObj = {};
    const numArr = [];

    for (const num of numlist) {
        const absNum = Math.abs(n - num);
        numObj[num] = absNum;
        numArr.push(absNum);
    }

    numArr.sort((a, b) => a - b);
    
    const numSet = new Set(numArr);
    for (const num of numSet) {
        const keyList = Object.entries(numObj)
            .filter(([key, value]) => value === num)
            .map(([key, value]) => Number(key));

        keyList.sort((a, b) => b - a);

        resultList.push(...keyList);
    }

    return resultList
}