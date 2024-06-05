function solution(myString, pat) {
    let n = pat.length
    let lastindex = myString.lastIndexOf(pat)
    return myString.slice(0, lastindex+n)

}