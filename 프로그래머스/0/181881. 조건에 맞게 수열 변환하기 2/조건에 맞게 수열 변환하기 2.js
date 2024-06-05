function solution(arr) {
    let firstArr = [...arr];
    let secondArr = [...arr];
    let i = 0;
    let result = false;
    while(true){
        i++
        firstArr = firstArr.map(num=>{
            if(num>=50 && num%2===0) return num/2
            else if(num<50 && num%2!==0) return num*2+1
            else return num
        })
        result = secondArr.every((num,i)=>{
            return firstArr[i] === num
        })
        
        if(result === true){
            i--
            break;
        }else {
            secondArr = [...firstArr]
        }
    }

    return i;
}