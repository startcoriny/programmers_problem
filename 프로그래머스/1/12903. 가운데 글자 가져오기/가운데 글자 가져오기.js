function solution(s) {
    let arr = s.split("");
    let middleS = Math.floor(arr.length/2)
    let answer = arr.length%2===1?arr.slice(middleS,middleS+1) : arr.slice(middleS-1,middleS+1)
    return answer.join('')
}