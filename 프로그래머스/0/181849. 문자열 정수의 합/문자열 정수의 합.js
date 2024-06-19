function solution(num_str) {
    let arr = num_str.split("")
    return arr.reduce((a,c)=>a + +c,0);
}