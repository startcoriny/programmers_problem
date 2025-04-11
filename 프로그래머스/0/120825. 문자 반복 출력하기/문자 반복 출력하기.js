function solution(my_string, n) {
    
    return my_string.split("").reduce((str,s)=> str + s.repeat(n),"")
    
    
}