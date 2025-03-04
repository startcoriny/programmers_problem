function solution(my_string) {
     
    const numStr = my_string.replace(/\D/g,"")
    console.log(numStr)
    const numStrArr = numStr.split("")
    return numStrArr.map(numStr=> Number(numStr)).sort((a,b)=> a-b)

}