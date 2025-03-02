function solution(spell, dic) {
    
    let result = false;
    
    for(const word of dic){
        
        
        result = spell.every(str => word.includes(str))
        
        if(result){
            break;
        }
        
    }
    
    return result ? 1 : 2
}