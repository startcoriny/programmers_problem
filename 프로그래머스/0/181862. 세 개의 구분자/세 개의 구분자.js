function solution(myStr) {
    let regexp = /(a|b|c)/g
    let arr = myStr.replaceAll(regexp, " ")
    let result = arr.split(" ").filter(str=>str !== "")
    return result.length === 0? ["EMPTY"]: result
}