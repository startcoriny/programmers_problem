function solution(money) {
    
    
    const coffeeCnt = Math.floor(money/5500)
    
    const coffeeMoney = 5500 * coffeeCnt
    
    const saveMoney = money - coffeeMoney
    
    return [coffeeCnt, saveMoney];
}