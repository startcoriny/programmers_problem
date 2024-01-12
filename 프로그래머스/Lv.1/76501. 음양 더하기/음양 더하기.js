function solution(absolutes, signs) {
    for (let i = 0; i < signs.length; i++) {
        if (!signs[i]) absolutes[i] *= -1
    }
    let sum = absolutes.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    return sum;
}