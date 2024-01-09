function solution(arr) {
    
    let tot = arr.reduce((a,b)=>a+b,0)/arr.length
    return tot
}