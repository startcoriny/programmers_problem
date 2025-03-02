function solution(array) {
    
    const set = new Set()
        
    for(const num of array){
        
        if(!set[num]){
            set[num] = 1
        }else{
            set[num] = set[num] + 1
        }
    }
    
    let maxNum = 0
    let countNum = 0
    let duplicate = false
    
    for(const key in set){
        
        if(set[key] > maxNum){
            maxNum = set[key]
            countNum = key
            duplicate = false
        }else if(set[key] === maxNum){
            duplicate = true
        }
    }
    
    return duplicate ? -1 : Number(countNum)
    
}