function solution(myString) {
    var answer = [];
    return myString.split("x").map(str=> str.length);
}