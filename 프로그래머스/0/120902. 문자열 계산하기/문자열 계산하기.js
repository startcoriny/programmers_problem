function solution(my_string) {
    const strArr = my_string.split(" ");
    let tot = Number(strArr[0]);

    console.log(strArr)
    for(let i = 1; i < strArr.length - 1; i+=2){
        if(strArr[i] === "+"){
            tot = tot + Number(strArr[i+1])
        }else{
            tot = tot - Number(strArr[i+1])
        }
    }
    
    return tot;
}