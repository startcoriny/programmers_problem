function solution(array) {
    let count = 0;
    for(let i = 0; i < array.length; i++){
        array[i] = array[i] + ""
        for(let j = 0; j < array[i].length; j++){
            if(array[i][j] === "7"){
                count++
            }
        }
    }
    return count
}