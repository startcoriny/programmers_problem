function solution(number) {
    const numberArr = number.split("")
    const addNum = numberArr.reduce((acc,cur)=>acc + +cur, 0)
    return addNum % 9
}