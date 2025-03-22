function solution(s) {
    
    const sArr = s.split(" ")
    
    console.log(sArr)
    
    let totNum = 0
    let preNum = 0
    
    for(let i = 0; i < sArr.length; i++){
                
        if(sArr[i] === "Z"){
            
            totNum = totNum - preNum
            
        }else{
            const currNum = Number(sArr[i])
            
            preNum = currNum
            totNum = totNum + currNum
        }
    }
    return totNum;
}