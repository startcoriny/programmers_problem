function solution(hp) {
    
    let antNum = 0
    
    while(hp > 0){
        
        if( (hp / 5)  >=  1 ){
            
           const share  = Math.floor(hp / 5)
           
           antNum += share
           
           hp = hp - (share * 5)
        } else if( (hp / 3)  >=  1 ){
            
           const share  = Math.floor(hp / 3)
           
           antNum += share
           
           hp = hp - (share * 3)
        } else {
           
           antNum++
           
           hp = hp - 1
        }
        
        console.log(hp)
        
    }
    
    return antNum
    
    
}