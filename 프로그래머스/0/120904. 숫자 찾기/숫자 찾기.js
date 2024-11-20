function solution(num, k) {
    const result =  num.toString().indexOf(k)
    
    return result < 0 ? -1 : result + 1
}