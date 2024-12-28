function solution(s) {

    let result = ""
    let resultArr = []
    const sArr = s.split("")
    const sObj = {}
    
    for(const str of sArr){
        if(!sObj[str]){
            sObj[str] = 1
        }else{
            sObj[str] = sObj[str] + 1
        }
    }
    
    for(const key in sObj){
        
        if(sObj[key] === 1){
            resultArr.push(key)
        }    
    }
    
    resultArr.sort()
    
    return resultArr.join("")
}