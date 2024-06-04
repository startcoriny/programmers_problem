function solution(num_list) {
    let count = 0;
    let countArr = [];
    
    function makeOne(num,count){
        if(num === 1){
            return count;
        }else if(num%2===0){
            count += 1
            return makeOne(num/2,count);
        }else{
            count += 1
            return makeOne((num-1)/2,count);
        }
    }
    
    for(let i = 0; i<num_list.length; i++){
       countArr[i] = makeOne(num_list[i],count)
    }
    return countArr.reduce((a,c)=>a+c,0);
}