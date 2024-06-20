function solution(myString) {
    let strArr = myString.split("")
    const ascNum = 'l'.charCodeAt()
    let newString = strArr.map(str=>{
        return str.charCodeAt() < ascNum ? 'l' : str
    })
    return newString.join("");
}