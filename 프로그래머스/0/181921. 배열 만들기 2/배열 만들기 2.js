function solution(l, r) {
    const exceptNum = /[^05]/
    let arr = [];
    for(let i = l; i<=r; i++){
        if(i%5===0 && !exceptNum.test(i.toString())){
            arr.push(i)
        }
    }
    if(arr.length === 0){
        arr.push(-1)
    }
    return arr
}