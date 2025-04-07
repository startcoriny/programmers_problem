function solution(num_list, n) {
    const answer = []
    
    num_list.forEach((_,i)=>{
        const tempList = []
        
        if(i > 0 && i % n === n - 1){
            
            for(let j = i - (n - 1); j <= i; j++){
                tempList.push(num_list[j])
            }
            
        }
        
        if(tempList.length > 0){
            answer.push(tempList)
        }
    })
    
    return answer;
}