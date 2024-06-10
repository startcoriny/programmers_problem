function solution(arr) {
    let newArr = []
    arr.forEach(x=>{
        for(let i = 0; i < x; i++){
            newArr.push(x)
        }  
    })
    return newArr
}