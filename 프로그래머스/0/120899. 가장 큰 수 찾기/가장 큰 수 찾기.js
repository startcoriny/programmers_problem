function solution(array) {

    const result = array.reduce((acc,curr,i)=>{
        
        if(curr > acc.max){
            acc.max = curr;
            acc.idx = i;
        } 
        return acc;
    },{max:0,idx:0});
    
    
    return [result.max, result.idx]
}