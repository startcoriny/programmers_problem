function solution(my_string) {
    
    const numStrArr = my_string.replace(/[^0-9]/g," ").split(" ")
    console.log(numStrArr)
    
    return numStrArr.reduce((acc,numStr)=> acc + Number(numStr),0)
    
}