function solution(a, b, c) {
    var answer = 0;
    if(a!==b && a!==c && b!==c){
        return answer = a+b+c
    }else if( a===b && b===c){
        return answer = (a+b+c)*(a*a+b*b+c*c)*(a**3+b**3+c**3)
    }else if(a===b || a===c || b===c){
        return answer = (a+b+c)*(a*a+b*b+c*c)
    }
}