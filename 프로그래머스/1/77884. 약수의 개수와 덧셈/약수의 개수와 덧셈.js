function solution(left, right) {
    let totnum = 0;
    for (let i = left;  i <= right; i++) {
        let num=[];


        for (let j = 1; j <= i; j++) {
            if(i%j === 0){
                num.push(j);
            }
        }


        if(num.length%2===0){
            totnum += i
        }else{
            totnum -=i
        }
    }
    return totnum;
}