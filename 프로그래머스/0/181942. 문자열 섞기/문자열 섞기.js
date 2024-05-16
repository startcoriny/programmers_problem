function solution(str1, str2) {
    var answer = [];
    let nstr1 = str1.split("")
    let nstr2 = str2.split("")
    for(let i=0; i<str1.length;i++){
        answer.push(nstr1[i],nstr2[i]);
    }
    return answer.join("");
}