function solution(myString, pat) {
    const result = myString.split("").map(str=> str === "A"? "B":"A").join("").includes(pat)
    
    return result === true ? 1:0
}