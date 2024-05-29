function solution(num_list, n) {
    // num_list는 처음부터 마지막까지
    // n개 간격으로 저장되어있는 원소들을 담은 리스트 반환
    
    // 명령형코드
    // var answer = [];
    // for(let i = 0; i < num_list.length; i+=n){
    //     answer.push(num_list[i])
    // }
    // return answer;
    
    // 선언형코드
    return num_list.filter((num,i)=> i%n===0)
}