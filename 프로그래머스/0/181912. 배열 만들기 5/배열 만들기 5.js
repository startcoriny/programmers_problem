function solution(intStrs, k, s, l) {
    return intStrs.map(intstr=> {
     let int = intstr.slice(s, s+l)   
     return int > k ? +int : ""
    }).filter(int=> int !== "")

}