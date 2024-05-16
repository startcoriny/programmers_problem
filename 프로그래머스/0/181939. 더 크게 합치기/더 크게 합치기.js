function solution(a, b) {
    a+=""
    b+=""
    let ab = a+b
    let ba = b+a
    
    let answer = +ab > +ba ? +ab: +ba
    return answer
 }