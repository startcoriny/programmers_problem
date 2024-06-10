function solution(myStr) {
    let regexp = /[^a-c]+/g
    // let arr = myStr.replaceAll(regexp, " ")
    return myStr.match(regexp)||["EMPTY"]
}