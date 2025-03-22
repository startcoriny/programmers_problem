function solution(price) {
    
    let payment = 0
    let salePrice = 0

    if(price >= 500000){
        salePrice = price * (20/100)
    }else if(price >= 300000){
        salePrice = price * (10/100)
    }else if(price >= 100000){
        salePrice = price * (5/100)
    }
    
    return Math.floor(price - salePrice);
}