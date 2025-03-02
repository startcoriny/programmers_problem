function solution(array, n) {
    
    return array.reduce((acc,num)=> {
        if(num === n) {
            ++acc
        }
        return acc
    },0)
}