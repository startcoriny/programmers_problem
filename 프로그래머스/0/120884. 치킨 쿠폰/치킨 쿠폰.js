function solution(chicken) {
    
    let getChicken = 0
    
    while(chicken > 0){
    
        const couponChicken = Math.floor(chicken/10)
        const modChicken = chicken % 10
        
        getChicken = getChicken + couponChicken
        chicken = couponChicken + modChicken
        
        if(couponChicken === 0){
            break;
        }
        
    }
    
    return getChicken    
}