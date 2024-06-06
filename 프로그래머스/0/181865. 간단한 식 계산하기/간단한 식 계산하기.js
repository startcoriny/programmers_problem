function solution(binomial) {
    
    function calc(math){
        const [a, op, b] = math
        if(op === "+") return +a + +b
        if(op === "-") return +a - +b
        if(op === "*") return +a * +b
    }
    
    return calc(binomial.split(" "))
    
}