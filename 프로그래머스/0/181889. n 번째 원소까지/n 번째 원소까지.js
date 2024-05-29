function solution(num_list, n) {
    // 명령형 코드
    // let answer = [];
    // for(let i = 0; i < n; i++){
    //     answer.push(num_list[i])
    // }
    
    // 선언형 코드
    return num_list.filter((num,i)=> i<n);
}