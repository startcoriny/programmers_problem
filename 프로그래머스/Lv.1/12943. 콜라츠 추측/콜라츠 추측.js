function solution(num) {
    let colach = 0
    while (num>1) {
        if(colach>=500){
            colach = -1;
            break;
        }
        if(num%2===0){
            num = Math.floor(num/2)
        }else{
            num = num*3+1
        }
        colach++
    }
    return colach;
}