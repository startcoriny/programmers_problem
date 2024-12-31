function solution(before, after) {
    const beforeObj = {};
    const afterObj = {};
    
    for(const str of before){
        if(!beforeObj[str]){
            beforeObj[str] = 1
        }else{
            beforeObj[str] = beforeObj[str] + 1
        }
    }
    
    for(const str of after){
        if(!afterObj[str]){
            afterObj[str] = 1
        }else{
            afterObj[str] = afterObj[str] + 1
        }
    }
    
    for(const key in beforeObj){
        if(!afterObj[key]){
            return 0
        }
        
        if(afterObj[key] !== beforeObj[key]){
            return 0
        }
    }
    
    return 1
}