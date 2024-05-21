function solution(ineq, eq, n, m) {
    var answer = false;
    
    if(ineq === ">" && eq === "="){
        answer = n>=m
    }else if(ineq === ">" && eq === "!"){
        answer = n>m
    }else if(ineq === "<" && eq === "="){
        answer = n<=m
    }else if(ineq === "<" && eq === "!"){
        answer = n<m
    }
    return answer === true ? 1 : 0;
}