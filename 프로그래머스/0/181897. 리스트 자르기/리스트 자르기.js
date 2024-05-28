function solution(n, slicer, num_list) {
    // 정수 n(1|2|3|4)
    // 정수 3개가 담긴 리스트 slicer[a,b,c]
    // 정수 여러개가 담긴 리스트 num_list
    // n이 1일 경우 num_list 0 부터 b까지 슬라이싱
    // n이 2일 경우 num_list a 부터 마지막까지 슬라이싱
    // n이 3일 경우 num_list a 부터 b까지 슬라이싱
    // n이 4일 경우 num_list a 부터 b까지 c간격으로 슬라이싱
    let answer = [];
    const [a,b,c] = slicer
    
    if(n === 1){
        answer = num_list.slice(0,b+1)
    }else if(n === 2){
        answer = num_list.slice(a)
    }else if(n === 3){
        answer = num_list.slice(a,b+1)
    }else if(n === 4){
        for(let i = a; i <= b; i+=c){
            answer.push(num_list[i])
        }
    }
    return answer;
}