function solution(A, B) {
    let str = A.split("");
    let count = 0;
    if(A === B){
        return 0
    }
    for(let i = 0; i < A.length; i++){
        let popStr = str.pop();
        str.unshift(popStr);
        count++;
        if(str.join("") === B){
            return count;
        }
    }
    return -1
}