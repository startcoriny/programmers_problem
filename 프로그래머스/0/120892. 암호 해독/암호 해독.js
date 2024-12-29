function solution(cipher, code) {
    let result = ""
    const cipherArr = cipher.split("")
    for(let i = code - 1; i < cipher.length; i += code ){
        result += cipherArr[i]
    }
    return result
}