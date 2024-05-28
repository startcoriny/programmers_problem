function solution(arr, intervals) {
    var answer = [];
    
    const allArr = intervals.map(([a,b])=>{
        let newArr = Array.from(arr)
        return newArr.slice(a,b+1)
    })
    
    allArr.forEach(arr=>{
        for(let num of arr){
            answer.push(num)
        }
    })
    
    return answer;
}