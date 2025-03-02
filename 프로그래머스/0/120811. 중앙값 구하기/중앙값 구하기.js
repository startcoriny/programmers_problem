function solution(array) {
    array.sort((a,b)=>a-b)
    
    const n = array.length
    
    const middle = Math.floor(n/2)
    
    return array[middle]
}