function solution(phone_number) {
    let numberArr = phone_number.split('')
    for (let i = 0; i < numberArr.length-4; i++) {
        numberArr[i] = "*"
    }
    return numberArr.join("");
}