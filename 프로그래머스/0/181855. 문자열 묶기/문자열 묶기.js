function solution(strArr) {
    var answer = 0;
    let arr = Array.from({ length: 30 }, () => []);
    
    for(let i = 0; i < strArr.length; i++){
        let n = strArr[i].length-1
        arr[n].push(strArr[i])
    }
    let numArr = arr.filter(str => str.length > 0).map(str=> str.length)
    
    return Math.max(...numArr)
}