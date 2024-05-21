function solution(num_list) {
    var answer = 0;
    let odd = "" 
    let even = ""
    
    num_list.forEach(num=>{
        num%2 === 0 ? even+=num : odd+=num
    })
    
    answer = +odd + +even
    
    return answer;
}