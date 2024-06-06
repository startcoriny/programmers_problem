function solution(myString) {
    var answer = [];
    return myString.split("x").filter(str=>str).sort();
}