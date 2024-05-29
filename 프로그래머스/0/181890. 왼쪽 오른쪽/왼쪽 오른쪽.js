function solution(str_list) {
    let indexL = str_list.indexOf("l")
    let indexR = str_list.indexOf("r")
    if(indexL === -1 && indexR=== -1){
        return []
    }else if(indexR === -1){
        return str_list.slice(0,indexL)
    }else if( indexL === -1){
        return str_list.slice(indexR+1)
    }else{
        return indexL<indexR?str_list.slice(0,indexL) : str_list.slice(indexR+1)
    }
}