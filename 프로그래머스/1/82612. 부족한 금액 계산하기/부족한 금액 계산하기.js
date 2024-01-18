function solution(price, money, count) {
    let totprice = 0;
    for (let i = 1; i <= count; i++) {
        totprice += price*i;
    }
    return totprice-money > 0 ? totprice-money : 0;
}